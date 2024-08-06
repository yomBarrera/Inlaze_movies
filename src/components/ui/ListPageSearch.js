'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useMovies } from '@/utils/movies-provider';

import { CardItem } from './CardItem';
import PaginationSearch from './PaginationSearch';
import PaginationOptions from './Pagination';


export const ListPageSearch = ({ className }) => {

  const { movies, getMoviesSearching } = useMovies()

  const searchParams = useSearchParams()

  const query = searchParams.get('query') ?? ''

  const page = searchParams.get('page') ?? 1

  useEffect(() => {
    getMoviesSearching(query, page)
  }, [query])

  return (
    <>
      <div className={className.list}>
        {movies && movies.results.length != 0 ? movies.results.map((movie) => (
          <CardItem key={movie.id} movie={movie}></CardItem>
        )) : (<h2 className={className.nomovies}>NO movies</h2>)}
      </div>
      <div className="pagination">
        {movies && <PaginationOptions npages={movies.total_pages} page={movies.page} />}
      </div>
    </>

  )
}
