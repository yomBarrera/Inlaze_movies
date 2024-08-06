import { ListPageSearch } from '@/components/ui/ListPageSearch'

import styles from './pageSearch.module.css'

export default function SearchPage() {

  const { content, subtitle, list, nomovies } = styles

  return (
    <div className={content}>
      <h2 className={subtitle}>{'Search Results'}</h2>
      <ListPageSearch className={{ list, nomovies }} />
    </div>
  )
}