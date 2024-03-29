import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './AboutMe.module.scss';


export const AboutMe: React.FC = observer(() => {
  return (
    <div className={styles.skillDetail}>
      <div className={styles.card}>

        <div className={styles.cardBack}>
          <div className={styles.lineNumbers}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </div>

          <code>
            <span className={styles.variable}>const </span>
            <span className={styles.function}>aboutMe </span>
            <span className={styles.operator}>= </span><span>{"{"}</span>
            <div className={styles.indent}>
              <span className={styles.property}>name</span>
              <span className={styles.operator}>: </span>
              <span className={styles.string}>'Яков Носков'</span>
              <span>,</span>
            </div>
            <div className={styles.indent}>
              <span className={styles.property}>title</span>
              <span className={styles.operator}>: </span>
              <span className={styles.string}>'Frontend Developer'</span>
              <span>,</span>
            </div>
            <div className={styles.indent}>
              <span className={styles.property}>tech</span>
              <span className={styles.operator}>: </span>

              <span>{"["}</span>
              <div className={styles.indent}>
                <span className={styles.string}> "JavaScript"</span>
                <span>,</span>
              </div>
              <div className={styles.indent}>
                <span className={styles.string}> "TypeScript"</span>
                <span>,</span>
              </div>
              <div className={styles.indent}>
                <span className={styles.string}> "React"</span>
                <span>,</span>
              </div>
              <div className={styles.indent}>
                <span className={styles.string}>"React Native"</span>
                <span>,</span>
              </div>
              <span>{"]"}</span>
              <span>,</span>

            </div>
            <div className={styles.indent}>
              <span className={styles.property}>contact</span>
              <span className={styles.operator}>: </span>
              <span>{"{"}</span>
              <div className={styles.indent}>
                <span className={styles.property}>telegram</span>
                <span className={styles.operator}>: </span>
                <span className={styles.string}>'@someonesess'</span>
                <span>,</span>
              </div>
              <div className={styles.indent}>
                <span className={styles.property}>email</span>
                <span className={styles.operator}>: </span>
                <span className={styles.string}>'jakovnoskov@hotmail.com'</span>
                <span>,</span>
              </div>
              <span>{"}"}</span>
            </div>
            <span>{"}"}</span>
          </code>
        </div>

      </div >
    </div >
  )
})