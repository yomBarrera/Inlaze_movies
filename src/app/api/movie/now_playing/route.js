import { NextResponse } from 'next/server'

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page') ?? '1';

  try {
    const data = await fetch(`${process.env.URL_API}now_playing?api_key=${process.env.API_KEY}&page=${page}`, {
      next: {
        revalidate: 60 * 60,
      },
    }).then((res) => res.json());

    return NextResponse.json({ data })

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
