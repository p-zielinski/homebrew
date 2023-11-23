'use client';

import React, { useEffect, useState } from 'react';
import SubHero from '@/components/ui/SubHero';
import NotionCard from '@/components/ui/CollegeCard';
import { useParams, useRouter } from 'next/navigation';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css';
import '../../styles/notion.css';
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css';
// used for rendering equations (optional)
import 'katex/dist/katex.min.css';
import dynamic from 'next/dynamic';
import Notion from '@/components/Notion';
import { NotionPage } from '@/components/NotionPage';
import { notionsIds } from '@/app/fakeDb/notionsIds';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);

const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
);

export default function CollegesPage() {
  const { id }: { id: string } = useParams();
  const pageId = notionsIds.find(
    (notionRecord) => notionRecord.slug === id
  )?.pageId;

  const router = useRouter();

  const [pageData, setPageData] = useState(undefined);
  useEffect(() => {
    if (!pageId) {
      const potentialSlugId = notionsIds.find(
        (notionRecord) => notionRecord.pageId === id
      )?.slug;
      return router.push(potentialSlugId ? `/${potentialSlugId}` : '/colleges');
    }
    (async () => {
      const res = await fetch(`/api/notion?pageId=${pageId}`, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin'
      });
      try {
        setPageData(await res.json());
      } catch (e) {
        router.push('/colleges');
      }
    })();
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        {pageData ? (
          <NotionPage recordMap={pageData} pageId={pageId} />
        ) : (
          'loading'
        )}
      </div>
    </section>
  );
}
