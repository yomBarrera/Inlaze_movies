import { NextResponse } from 'next/server'

export async function GET(request, context) {

  const nick = context.params.nick

  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page') ?? '1';


  try {
    const data = await fetch(`${process.env.URL_DATA}?query=${nick}&api_key=${process.env.API_KEY}&page=${page}`, {
      next: {
        revalidate: 60 * 60 * 30,
      },
    }).then((res) => res.json());

    return NextResponse.json({ data })

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}