import React from 'react'
import styles from './BannerSlider.module.css'


const BannerSlider = ({ option }) => {
  return (
    <div style={{
      background: `url(${process.env.NEXT_PUBLIC_URL_IMAGE_BANNER}${option.backdrop_path}) center center/cover no-repeat`,
      position: 'relative',
      height: '436px'
    }} >
      <section className={styles.filter}>

        <div className={styles.text}>
          <h3>{option.title}</h3>
          <p>{option.overview.length > 200 ? option.overview.slice(200) : option.overview}</p>
        </div>

      </section>
      <section className={styles.infobar}>
        <div className={styles.info}>
          <ul>
            <li>Trama</li>
            <li>Cast</li>
            <li>Gallery</li>
            <li>Info</li>
          </ul>
        </div>
        <div className={styles.action}>
          <button className={`icon icon-favorite ${styles['icon-favorite']}`}></button>
          <button className={`icon icon-checkbook ${styles['icon-checkbook']}`}></button>
          <button className={`icon icon-share ${styles['icon-share']}`}></button>
        </div>
      </section>
    </div>
  )
}

export default BannerSlider

