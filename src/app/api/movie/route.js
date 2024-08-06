import { NextResponse } from 'next/server'

export async function GET(request) {

  const { URL_ACCOUNT, ACCOUNT_ID, API_KEY } = process.env

  try {
    ///
    const data = await fetch(`${URL_ACCOUNT}${ACCOUNT_ID}favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, {
      next: {
        revalidate: 60 * 60,
      },
    }).then((res) => res.json());

    return NextResponse.json({ data })

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


