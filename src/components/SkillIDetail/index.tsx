import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './SkillIDetail.module.scss';
import { store } from '../../stores/skills/store';
import { ProjectIttem } from '../ProjectIttem';
import { getRandomInt } from '../../utils/getRandomInt';


type skillDetailProps = {
  setMobileSkill: React.Dispatch<React.SetStateAction<boolean>>
}

export const SkillIDetail: React.FC<skillDetailProps> = observer(({ setMobileSkill }) => {

  const [mount, setMount] = useState(false);
  const [opacityStyle, setOpacity] = useState(0);
  const [translateStyle, setTranslateStyle] = useState("translateY(100px)");
  const [localObject, setLocalObject] = useState(store.showElement);

  /** un-mount */
  useEffect(() => {

    if (mount) {
      let timerFadeout = setTimeout(
        () => {
          setOpacity(0);
          setTranslateStyle("translateY(-200px)");
          //setTranslateStyle("translateX(20px)");
        }, 0);
      let timerMid = setTimeout(
        () => {
          setTranslateStyle("translateY(100px)");
        }, 100);
      let timer = setTimeout(
        () => {
          setLocalObject(store.showElement)
          setOpacity(1);
          setTranslateStyle("none");
        },
        300
      );

      return () => {
        clearTimeout(timer);
        clearTimeout(timerMid);
        clearTimeout(timerFadeout);
      }
    } else {
      setMount(true)
    }
  }, [store.showElement]);

  useEffect(() => {
    let timer = setTimeout(
      () => {
        setOpacity(1);
        setTranslateStyle("none");
      },
      300
    );
    return () => clearTimeout(timer);
  }, []);

  function onClickClose() {
    let timerFadeout = setTimeout(
      () => {
        setOpacity(0);
        setTranslateStyle("translateY(-200px)");
        //setTranslateStyle("translateX(20px)");
      }, 0);
    let timerMid = setTimeout(
      () => {
        setTranslateStyle("translateY(200px)");
        setMobileSkill(false)
      }, 100);

    return () => {
      clearTimeout(timerMid);
      clearTimeout(timerFadeout);
    }
  }


  return (
    <div
      className={styles.skillDetail}
      style={{
        transition: `opacity ${getRandomInt(300, 600)}ms, transform ${getRandomInt(300, 600)}ms`,
        transform: translateStyle,
        opacity: opacityStyle,
      }}
    >
      <div className={styles.skillDetailWrapper} style={{ opacity: opacityStyle, }}>


        <div className={styles.skillDetailInfo}>

          <div className={styles.boxCloseImg}>
            {localObject && localObject.logo ?
              <img
                style={{ width: '100px' }}
                src={require(`./logo/${localObject.logo}.svg`)}
                alt={localObject.logo}
              />
              : null}
            <div
              onClick={() => onClickClose()}
              className={styles.close}
            />
          </div>

          <h1 className={styles.skillDetailTitle}>
            {localObject?.name}
          </h1>
          <span className={styles.skillDetailDescription}>
            {localObject?.description}
          </span>
          <div className={styles.projectWrapper}>
            <h2 className={styles.skillProjectTitle}>Проекты</h2>
            <div className={styles.projectListWrapper}>
              <ProjectIttem id="0" name="React Pizza" logo="pizza" link="https://jakovnoskov.github.io/react-pizza/" />
              <ProjectIttem id="1" name="React Sneakers" logo="sneakers" link="https://jakovnoskov.github.io/react-sneakers/" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
})