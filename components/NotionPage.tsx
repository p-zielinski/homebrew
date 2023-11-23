import * as React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import cs from 'classnames';
import { PageBlock } from 'notion-types';
import { formatDate, getBlockTitle, getPageProperty } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';
import TweetEmbed from 'react-tweet-embed';
import { useSearchParam } from 'react-use';

import { Footer } from './Footer';
import { GitHubShareButton } from './GitHubShareButton';
import { Loading } from './Loading';
import { NotionPageHeader } from './NotionPageHeader';
import { Page404 } from './Page404';
import { PageAside } from './PageAside';
import { PageHead } from './PageHead';
import styles from './styles.module.css';

// -----------------------------------------------------------------------------
// dynamic imports for optional components
// -----------------------------------------------------------------------------

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    // add / remove any prism syntaxes here
    return m.Code;
  })
);

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
// const Pdf = dynamic(
//   () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
//   {
//     ssr: false
//   }
// );
const Modal = dynamic(
  () =>
    import('react-notion-x/build/third-party/modal').then((m) => {
      m.Modal.setAppElement('.notion-viewport');
      return m.Modal;
    }),
  {
    ssr: false
  }
);

const Tweet = ({ id }: { id: string }) => {
  return <TweetEmbed tweetId={id} />;
};

const propertyLastEditedTimeValue = (
  { block, pageHeader }: any,
  defaultFn: () => React.ReactNode
) => {
  if (pageHeader && block?.last_edited_time) {
    return `Last updated ${formatDate(block?.last_edited_time, {
      month: 'long'
    })}`;
  }

  return defaultFn();
};

const propertyDateValue = (
  { data, schema, pageHeader, pageId }: any,
  defaultFn: () => React.ReactNode
) => {
  if (pageHeader && schema?.name?.toLowerCase() === 'published') {
    const publishDate = data?.[0]?.[1]?.[0]?.[1]?.start_date;

    if (publishDate) {
      return `${formatDate(publishDate, {
        month: 'long'
      })}`;
    }
  }

  return defaultFn();
};

const propertyTextValue = (
  { schema, pageHeader }: any,
  defaultFn: () => React.ReactNode
) => {
  if (pageHeader && schema?.name?.toLowerCase() === 'author') {
    return <b>{defaultFn()}</b>;
  }

  return defaultFn();
};

export const NotionPage = ({ recordMap, pageId }: any) => {
  const lite = useSearchParam('lite');

  const components = React.useMemo(
    () => ({
      nextImage: Image,
      nextLink: Link,
      Code,
      Collection,
      Equation,
      Modal,
      Tweet,
      Header: NotionPageHeader,
      propertyLastEditedTimeValue,
      propertyTextValue,
      propertyDateValue
    }),
    []
  );

  // lite mode is for oembed
  const isLiteMode = lite === 'true';

  // const siteMapPageUrl = React.useMemo(() => {
  //   const params: any = {};
  //   if (lite) params.lite = lite;
  //
  //   const searchParams = new URLSearchParams(params);
  //   return mapPageUrl(site, recordMap, searchParams);
  // }, [site, recordMap, lite]);

  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;

  // const isRootPage =
  //   parsePageId(block?.id) === parsePageId(site?.rootNotionPageId)
  const isBlogPost =
    block?.type === 'page' && block?.parent_table === 'collection';

  const showTableOfContents = !!isBlogPost;
  const minTableOfContentsItems = 3;

  const pageAside = React.useMemo(
    () => (
      <PageAside block={block} recordMap={recordMap} isBlogPost={isBlogPost} />
    ),
    [block, recordMap, isBlogPost]
  );

  const footer = React.useMemo(() => <Footer />, []);

  if (!block) {
    return <>a</>;
    // <Page404 pageId={pageId} error={error} />;
  }

  const title = getBlockTitle(block, recordMap) || 'site.name';

  const socialDescription =
    getPageProperty<string>('Description', block, recordMap) ||
    'config.description';

  return (
    <>
      <PageHead pageId={pageId} title={title} description={socialDescription} />
      <NotionRenderer
        bodyClassName={cs(styles.notion)}
        components={components}
        darkMode={false}
        recordMap={recordMap}
        fullPage={!isLiteMode}
        previewImages={!!recordMap.preview_images}
        showCollectionViewDropdown={false}
        showTableOfContents={showTableOfContents}
        minTableOfContentsItems={minTableOfContentsItems}
        // defaultPageIcon={config.defaultPageIcon}
        // defaultPageCover={config.defaultPageCover}
        // defaultPageCoverPosition={config.defaultPageCoverPosition}
        // mapPageUrl={siteMapPageUrl}
        // mapImageUrl={mapImageUrl}
        // searchNotion={config.isSearchEnabled ? searchNotion : null}
        // pageAside={true}
        footer={footer}
      />
      <GitHubShareButton />
    </>
  );
};
