import React from 'react';
import styles from './Footer.module.scss';
import { observer } from 'mobx-react-lite';
import store from '../../stores/explosion/store';
import FadeIn from '../FadeIn';

export const Footer: React.FC = observer(() => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>

        <FadeIn
          className={styles.footerLinkWrapper}
          delay={200}
          transitionDuration={400}
        >
          <a
            className={styles.footerLink}
            target="_blank"
            href="https://github.com/jakovnoskov">
            гитхаб
          </a>
        </FadeIn>

        <div className={styles.point}>•</div>
        <FadeIn
          className={styles.footerLinkWrapper}
          delay={300}
          transitionDuration={500}
        >
          <button
            disabled={store.showExplosion}
            onClick={() => store.changeShowExplosion(true)}
            className={styles.footerLink}>
            взрыв
          </button>
        </FadeIn>
        <div className={styles.point}>•</div>
        <FadeIn
          className={styles.footerLinkWrapper}
          delay={400}
          transitionDuration={700}
        >
          <a className={styles.footerLink} href="mailto:jakovnoskov@hotmail.com">
            емейл
          </a>
        </FadeIn>
      </div>
    </footer>
  )
})