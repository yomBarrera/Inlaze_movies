import Image from 'next/image'
import styles from './CardItem.module.css'
import { RatingItem } from './RatingItem';

export const CardItem = ({ movie }) => {

  const event = new Date(movie.release_date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  let date = event.toLocaleDateString("en-US", options)
  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
        <Image src={`${process.env.NEXT_PUBLIC_URL_IMAGE}${movie.poster_path}`} alt='movie Banner' width={200} height={223} />
      </div>
      <section className={styles.cardbody}>
        <div className={styles.titlecard}>
          {movie.original_title}
        </div>
        <div className={styles.datecard}>
          {date}
        </div>
        <div className={styles.actionscard}>
          <div className={styles.rating}>
            <span>Rating</span>
            <RatingItem rating={movie.vote_average} />
          </div>
          <div className={styles.favorites}>
            <span>Favorites</span>
            <button className={`icon icon-heart ${styles['icon-favorite']}`}></button>
          </div>
          <div className={styles.save}>
            <span>Save</span>
            <button className={`icon icon-checkbook ${styles['icon-checkbook']}`}></button>
          </div>
        </div>
      </section>
    </div>
  )
}
