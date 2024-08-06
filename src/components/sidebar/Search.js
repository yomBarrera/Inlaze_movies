'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

import styles from './sidebar.module.css'

export const Search = () => {

  const searchParams = useSearchParams();
  const route = useRouter()
  const [movieSerach, setMovieSerach] = useState('')

  async function handleSearch(e) {

    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    const query = searchParams.get('query') ?? ''

    if (query != '') {
      params.set('query', query);
    } else {
      if (movieSerach != '') {
        params.set('query', movieSerach);
      }
    }
    route.replace(`search?${params.toString()}`);
    route.refresh();

  }

  return (
    <form className={styles.form} onSubmit={handleSearch} >
      <label >
        <span>Search</span>
        <input type="text" placeholder="Keywords" name='search' onChange={(e) => setMovieSerach(e.target.value)} />
        <button className={`${styles.buton}`}>
          <i className={`icon icon-search ${styles['icon-search']}`} />
        </button>
      </label>
    </form>
  )
}
