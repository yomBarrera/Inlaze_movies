'use client'

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { useMovies } from '@/utils/movies-provider';

import './PaginationCustom.css'


function PaginationOptions({ npages, page }) {

  const { getMoviesSearching, moviesCategoty, getMovieDiscovery } = useMovies()

  const path = usePathname()
  const searchParams = useSearchParams()

  const [pages] = useState(npages)
  const [current, setCurrent] = useState(page)
  const [route, setRoute] = useState('')

  const query = searchParams.get('query') ?? ''
  const sort = searchParams.get('sort') ?? ''
  const genre = searchParams.get('genre') ?? ''

  useEffect(() => {

    if (query !== '') {
      getMoviesSearching(query, current)
      setRoute(`${path}?query=${query}&page=`)
      return
    }
    if (sort !== '' || genre !== '') {
      getMovieDiscovery(current, sort, genre)
      setRoute(`${path}?sort=${sort}&genre=${genre}&page=`)
      return
    }

    moviesCategoty(path, current)
    setRoute(`${path}?page=`)

  }, [current])

  const nextPage = () => {
    if (current < pages) {
      setCurrent(current + 1)
    }
  }

  const prevPage = () => {
    if (current > 1) {
      setCurrent(current - 1)
    }
  }

  return (
    <div className='Pagination-section'>

      <div className='list-page'>

        {/*Arrow previous page  */}
        <Link href={route + `${current - 1}`} className='btn-arrow flex-row jtc-center alt-center'>
          <span className='icon icon-leftArrow' onClick={() => { prevPage() }} />
        </Link>

        {/* Numbers of page comparison */}
        <div className='pages'>
          <span>Página</span>
          <span className='current-page'>{current}</span>
          <span className='pgs'>de {pages} </span>
        </div>

        {/* Arrow next page */}
        <Link href={route + `${current + 1}`} className='btn-arrow flex-row jtc-center alt-center' >
          <span className='icon icon-rightArrow' onClick={() => { nextPage() }} />
        </Link>

      </div>

    </div>
  )
}

export default PaginationOptions
