import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './SkillIDetailSimple.module.scss';
import { store } from '../../stores/skills/store';
import { ProjectIttem } from '../ProjectIttem';
//import { getRandomInt } from '../../utils/getRandomInt';
import { motion, AnimatePresence } from "framer-motion";


type skillDetailProps = {
  setMobileSkill: React.Dispatch<React.SetStateAction<boolean>>
}

export const SkillIDetailSimple: React.FC<skillDetailProps> = observer(({ setMobileSkill }) => {

  const [localObject, setLocalObject] = useState(store.showElement);

  useEffect(() => {
    setLocalObject(store.showElement)
  }, [store.showElement]);

  function onClickClose() {
    console.log('onClickClose')
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.skillDetail}
        key={store.showElement ? store.showElement.id : "empty"}

        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.skillDetailWrapper}>
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
      </motion.div>
    </AnimatePresence>
  )
})