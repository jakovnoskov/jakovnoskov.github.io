import React from 'react'
import FadeIn from '../FadeIn'
import styles from './LogoAnimate.module.scss'

export const LogoAnimate: React.FC = () => {
  return (
    <div className={styles.LogoAnimateWrapper}>
      <div className={styles.animateLogoBox}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
    </div>
  )
}