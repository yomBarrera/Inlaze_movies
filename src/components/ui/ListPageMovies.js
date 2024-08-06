'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import PaginationOptions from './Pagination'
import { CardItem } from './CardItem'

import { useMovies } from '@/utils/movies-provider'

import styles from './ListPages.module.css'


function ListPageMovies({ category }) {

  const { movies, moviesCategoty } = useMovies()

  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? 1

  useEffect(() => {
    setTimeout(() => {
      moviesCategoty(category, page)
    }, 100);
  }, [category, page])

  return (
    <>
      <div className={styles.list}>
        {movies ? movies?.results?.map((movie) => (
          <CardItem key={movie.id} movie={movie}></CardItem>
        )) : (<h2>NO Movies</h2>)}
        {/* {JSON.stringify(movies)} */}
      </div>
      <div className="pagination">
        {movies && <PaginationOptions npages={movies.total_pages} page={movies.page} genre={category} changePage={moviesCategoty} />}
      </div>
    </>
  )
}

export default ListPageMovies
