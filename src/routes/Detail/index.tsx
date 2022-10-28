import React, { useState, useEffect } from 'react'
import style from './NotFound.module.scss'

interface IEmoji {
  id: number,
  value: string
}

const error_emoji: IEmoji[] = [
  { id: 0, value: "(='X'=)" },
  { id: 1, value: "(˚Δ˚)b" },
  { id: 2, value: "\(^Д^)/" },
  { id: 3, value: "(·_·)" },
  { id: 4, value: "(≥o≤)" },
  { id: 5, value: "(^-^*)" },
  { id: 6, value: "(o^^)o" },
  { id: 7, value: "(·.·)" },
  { id: 8, value: "(>_<)" },
  { id: 9, value: "(·.·)" },
  { id: 10, value: "\(o_o)/" },
]


export default function NotFound() {
  const [emoji, setEmoji] = useState<IEmoji>(error_emoji[rndE(0, 10)])

  function rndE(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateEmoji() {
    setEmoji(error_emoji[rndE(0, 10)])
  }

  return (
    <div className={style.blankPage}>
      <div className={style.blankPageError} >
        <div
          onClick={() => generateEmoji()}
          className={style.errorEmoji}>
          {emoji.value}
        </div>
        <div className={style.errorText}>
          <div >Страница в разработке.</div>
        </div>
      </div>
    </div>
  )
}