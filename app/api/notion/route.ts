import { NotionAPI } from 'notion-client';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const pageId = req.nextUrl.searchParams.get('pageId');
    if (!pageId) {
      return new Response('Invalid pageId', {
        status: 400
      });
    }
    const notion = new NotionAPI();
    try {
      const recordMap = await notion.getPage(pageId);
      return new Response(JSON.stringify(recordMap), {
        status: 200
      });
    } catch (e) {
      return new Response((e as any).toString(), {
        status: 400
      });
    }
  } catch (e) {
    return new Response('Server Error', {
      status: 500
    });
  }
}
