import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
// import { NotionAPI } from 'notion-client';

interface PageProps {
  pageId: string;
}

export const NotionRendererWrapper: React.FC<PageProps> = ({ pageId }) => {
  // const notion = new NotionAPI();
  const [page, setPage] = useState();
  // @ts-ignore
  // useEffect(async () => {
  //   const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf');
  //   console.log(recordMap);
  // }, []);
  return <>111</>;
};
