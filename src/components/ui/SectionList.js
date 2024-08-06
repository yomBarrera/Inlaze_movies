import styles from './SectionList.module.css';

import { CardItem } from './CardItem';

import { getMovies, getMoviesSection } from '@/libs/funtions';


export const SectionList = async ({ subTitle, category }) => {

  const MOVIES = await getMoviesSection(category)

  const { subtitle, list } = styles

  return (
    <>
      <h2 className={subtitle}>{subTitle}</h2>
      <div className={list}>
        {MOVIES ? MOVIES.results.map((movie) => (
          <CardItem key={movie.id} movie={movie}></CardItem>
        )) : (<h2>NO movies</h2>)}
      </div>
    </>
  )
}
