import React from 'react';
import { redirect } from 'next/navigation';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css';
import '../../styles/notion.css';
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css';
// used for rendering equations (optional)
import 'katex/dist/katex.min.css';
import { NotionPage } from '@/components/NotionPage';
import { notionsIds } from '@/app/fakeDb/notionsIds';

export default async function CollegesPage(context: {params:{id:string}, searchParams: Record<string,string>}) {
  const pageId = notionsIds.find(
    (notionRecord) => notionRecord.slug === context.params.id
  )?.pageId;
  if (!pageId) {
    const potentialSlugId = notionsIds.find(
      (notionRecord) => notionRecord.pageId === context.params.id
    )?.slug;
    return redirect(potentialSlugId ? `/${potentialSlugId}` : '/colleges');
  }
  const res = await fetch(`http://localhost:3000/api/notion?pageId=${pageId}`, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin'
  });
  try {
    const pageData = (await res.json());
    return <NotionPage recordMap={pageData} pageId={pageId} />
  } catch (e) {
    redirect('/colleges')
  }
}
