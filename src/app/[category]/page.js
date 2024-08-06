
import styles from './pageGenre.module.css';

import ListPageMovies from '@/components/ui/ListPageMovies';


export default async function GenrePage({ params }) {

  const { subtitle, content } = styles

  return (
    <div className={content}>
      <h2 className={subtitle}>{params.category.split('_').join(' ')}</h2>
      <ListPageMovies category={params.category} />
    </div>
  )
}

