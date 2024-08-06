'use client'

import { useEffect, useRef, useState } from 'react';
import './RatingItem.css'

export const RatingItem = ({ rating }) => {

  const [bgcolot, setBgcolot] = useState('')

  const ratingItem = useRef()

  const ratingScore = (parseFloat(rating, 1).toFixed(1)) * 10

  const scoreClass = ratingScore < 40 ? "bad" : ratingScore < 60 ? "meh" : "good";


  useEffect(() => {

    ratingItem.current.classList.add(scoreClass);

    let ratingColor = window.getComputedStyle(ratingItem.current);

    setBgcolot(ratingColor.getPropertyValue('background-color'))

  }, [scoreClass])


  return (
    <div ref={ratingItem} className='rating' style={{ background: `conic-gradient(${bgcolot} ${ratingScore}%, transparent 0 100%)` }}>
      <span>{ratingScore}{rating >= 0 ? <small>%</small> : ""
      }</span>
    </div>
  )
}
