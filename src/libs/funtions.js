const { URL_BASE, NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_URL_LOCAL } = process.env


export const getMoviesSection = async (data, page = 1) => {
  const resp = await fetch(`${NEXT_PUBLIC_URL_LOCAL}/api/movie/${data}?page=${page}`).then(res => res.json())
  return resp.data
};

export const getMovies = async (data, page = 1) => {
  const resp = await fetch(`/api/movie/${data}?page=${page}`).then(res => res.json())
  return resp.data
};

export const getMoviesOrderBy = async (data, page = 1, sort, genre = '') => {
  const resp = await fetch(`/api/movie/${data}?page=${page}&sort=${sort}&genre=${genre}`).then(res => res.json())
  return resp.data
};

export const getMoviesDiscover = async (page = 1, sort, genre = '') => {
  const resp = await fetch(`/api/movie/discovery?page=${page}&sort=${sort}&genre=${genre}`).then(res => res.json())
  return resp.data
};

export const getMoviesSearch = async (data, page = 1) => {
  const resp = await fetch(`/api/movie/search/${data}?page=${page}`).then(res => res.json())
  return resp.data
};

export async function getMoviesGenre() {
  const resp = await fetch(`${URL_BASE}genre/movie/list?api_key=${NEXT_PUBLIC_API_KEY}`).then(res => res.json())
  return resp.genres
}
export async function getMoviesTrending() {
  const resp = await fetch(`${URL_BASE}trending/movie/day?api_key=${NEXT_PUBLIC_API_KEY}`).then(res => res.json())
  return resp.results
}
