import * as React from 'react';
import Head from 'next/head';

export const PageHead = ({
  // site,
  title,
  description,
  pageId,
  image,
  url
}: any) => {
  const rssFeedUrl = `feed`;

  title = title ?? 'site?.name';
  description = description ?? 'site?.description';

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fefffe"
        key="theme-color-light"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#2d3439"
        key="theme-color-dark"
      />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      <meta name="twitter:card" content="summary" />
      {url && (
        <>
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
          <meta property="twitter:url" content={url} />
        </>
      )}
      <link
        rel="alternate"
        type="application/rss+xml"
        href={rssFeedUrl}
        title={'site?.name'}
      />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <title>{title}</title>
    </Head>
  );
};
