import React from 'react'
import styles from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { LogoAnimate } from '../LogoAnimate'
import FadeIn from '../FadeIn'

export const Header: React.FC = () => {
  return (
    <header className={
      styles.header
    }>
      <div className={styles.wrapperHeader + ' ' +
        'horisontPaddingLeft' + ' ' + 'horisontPaddingRight'}>
        <div className={styles.headerRight + ' ' + styles.headerSide}>
          <div className={styles.logoWrapper}>
            <Link to={'/'} className={styles.hlIttem}>
              <LogoAnimate />
            </Link>
          </div>

          <div className={styles.linksWrapper}>
            <FadeIn
              className={styles.linkWrapperBox}
              childClassName={styles.linkBox}
              delay={200}
            >
              <Link to={'/'} className={styles.hlIttem}>
                Мои навыки
              </Link>
              {/* <Link to={'projects'} className={styles.hlIttem}>
                Проекты
              </Link> */}
            </FadeIn>
          </div>

        </div>
        <div className={styles.headerLeft + ' ' + styles.headerSide}>
          <div className={styles.linksWrapper}>
            <FadeIn
              className={styles.linkWrapperBox}
              childClassName={styles.linkBox}
              delay={300}
              transitionDuration={700}
            >

              <Link to={'experience'} className={styles.hlIttem}>
                Опыт работы
              </Link>
              <Link to={'contacts'} className={styles.hlIttem + ' ' + styles.linkSkill}>
                Контакты
              </Link>
            </FadeIn>
          </div>

          {/* <div className={styles.headerTools}>
            <div className={styles.toolsWrapper}>
              <div className={styles.toolsIttem}>
                <button>theme</button>
              </div>
              <div className={styles.toolsIttem}>
                <button>lang</button>
              </div>
              <div className={styles.toolsIttem}>
                <button>sear</button>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </header>
  )
}