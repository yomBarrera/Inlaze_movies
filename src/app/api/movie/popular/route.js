import { NextResponse } from 'next/server'

const { URL_API, API_KEY } = process.env

export async function GET(request) {

  const searchParams = request.nextUrl.searchParams

  const page = searchParams.get('page') ?? '1';
  // const sort = searchParams.get('sort') ?? 'popularity.desc';
  const sort = searchParams.get('sort')
  const genre = searchParams.get('genre') ?? '';

  try {
    const data = await fetch(
      `${URL_API}popular?api_key=${API_KEY}&page=${page}&sort_by=${sort}&with_genres=${genre}`, {
      next: {
        revalidate: 60 * 60,
      },
    }).then((res) => res.json());

    return NextResponse.json({ data })

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}