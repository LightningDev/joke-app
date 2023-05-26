import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await res.json();
  return NextResponse.json({ response });
}

export const fetchCache = 'force-no-store'
