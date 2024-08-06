import { ListPageSearch } from '@/components/ui/ListPageSearch'

import styles from './pageSorted.module.css'
import { ListPageSort } from '@/components/ui/ListPageSort'

export default function SearchPage() {

  const { content, subtitle, list, nomovies } = styles

  return (
    <div className={content}>
      <h2 className={subtitle}>{'Sorting by'}</h2>
      <ListPageSort className={{ list, nomovies }} />
    </div>
  )
}