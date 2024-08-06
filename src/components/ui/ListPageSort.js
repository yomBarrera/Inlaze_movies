'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { useMovies } from '@/utils/movies-provider';

import { CardItem } from './CardItem';
import PaginationOptions from './Pagination';


export const ListPageSort = ({ className }) => {

  const { movies, getMovieDiscovery } = useMovies()

  const searchParams = useSearchParams()

  const sort = searchParams.get('sort') ?? ''
  const page = searchParams.get('page') ?? 1
  const genre = searchParams.get('genre') ?? 1

  useEffect(() => {
    getMovieDiscovery(page, sort, genre)
  }, [sort, genre])

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
