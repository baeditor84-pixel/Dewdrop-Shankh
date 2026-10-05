import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const contentFilePath = path.join(process.cwd(), 'content', 'content.json');

export async function GET() {
  try {
    const data = fs.readFileSync(contentFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data), {
      headers: {
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read content file' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const updatedContent = await request.json();
    fs.writeFileSync(contentFilePath, JSON.stringify(updatedContent, null, 2), 'utf8');
    return NextResponse.json({ success: true, message: 'Content updated successfully' }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to write content file' }, { status: 500 });
  }
}
