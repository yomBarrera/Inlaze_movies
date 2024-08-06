//https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.asc&vote_average.gte=3.5&vote_average.lte=8.5&with_genres=28

import { NextResponse } from 'next/server'

export async function GET(request) {

  const searchParams = request.nextUrl.searchParams

  console.log('dicovery searchParams =>  ' + JSON.stringify(searchParams));

  const page = searchParams.get('page') ?? '1';
  const sort = searchParams.get('sort') ?? '';
  const genre = searchParams.get('genre') ?? '';
  const rateMax = searchParams.get('rate_max');
  const rateMin = searchParams.get('rate_min');

  let serchRateMax = rateMax ? `&vote_average.lte=${rateMax}` : ''
  let serchRateMin = rateMin ? `&vote_average.gte=${rateMin}` : ''

  try {
    const data = await fetch(`${process.env.URL_BASE}discover/movie?api_key=${process.env.API_KEY}&include_adult=false&include_video=false&page=${page}&sort_by=${sort}${serchRateMin}${serchRateMax}&with_genres=${genre}`, {
      next: {
        revalidate: 60 * 60 * 30,
      },
    }).then((res) => res.json());

    return NextResponse.json({ data })

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}