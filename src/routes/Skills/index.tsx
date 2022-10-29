import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Skills.module.scss';
import { SkillItem } from '../../components/SkillItem';
import { SkillIDetail } from '../../components/SkillIDetail';
import FadeIn from '../../components/FadeIn';
import { Iskill } from '../../stores/skills/type';
import { store } from '../../stores/skills/store'
import { AboutMe } from '../../components/AboutMe';

export const Skills: React.FC = observer(() => {
  const jsonFile: Iskill[] = require('../../assets/jsons/skils.json')

  useEffect((() => {
    return store.setClearItem()
  }), [])

  useEffect((() => {
    store.setTools(jsonFile[0].tools)
    store.setManagers(jsonFile[0].stateManagers)
  }), [store.skills])

  return (
    <div className={styles.article}>
      <div className={styles.skillWrapper + ' ' +
        'horisontPaddingLeft' + ' ' + 'horisontPaddingRight'
      }>
        <FadeIn
          className={styles.skillTitle}
          delay={300}
          transitionDuration={400}
          wrapperTag="h1"
        >
          Мои навыки
        </FadeIn>
        <FadeIn
          className={styles.skillSubtitleTitle}
          delay={500}
          transitionDuration={700}
          wrapperTag="h2"
        >
          Фреймворки
        </FadeIn>
        <div className={styles.skillItemList}>

          {store.skills.map((sKitem: Iskill) => {
            return (
              <SkillItem
                key={Number(sKitem.id)}
                active={String(store.showElement?.id)}
                cat={'skills'}
                currentCat={store.currentCat}
                value={sKitem}
                onClick={store.setCurrentItem}
              />
            )
          })}

        </div>
        {store.tools && store.tools?.length > 0 ?
          <>
            <FadeIn
              className={styles.skillSubtitleTitle}
              delay={100}
              transitionDuration={400}
              wrapperTag="h2"
            >
              Инструменты
            </FadeIn>
            <div className={styles.skillItemList}>
              {
                store.tools?.map((sKitem: any) => (
                  <SkillItem
                    key={Number(sKitem.id)}
                    active={String(store.showElement?.id)}
                    cat={'tools'}
                    currentCat={store.currentCat}
                    value={sKitem}
                    onClick={store.setSelectItem}
                  />
                ))}

            </div>
          </> : null}
        {store.managers?.length > 0 ?
          <>
            <FadeIn
              className={styles.skillSubtitleTitle}
              delay={300}
              transitionDuration={400}
              wrapperTag="h2"
            >
              Стейт менеджеры
            </FadeIn>
            <div className={styles.skillItemList}>
              {store.managers?.map((sKitem: any) => (
                <SkillItem
                  key={Number(sKitem.id)}
                  active={String(store.showElement?.id)}
                  cat={'managers'}
                  currentCat={store.currentCat}
                  value={sKitem}
                  onClick={store.setSelectItem}
                />
              ))}
            </div>
          </> : null}

      </div>
      {store.showElement ? <SkillIDetail /> : null}
      {store.showElement ? null :
        <FadeIn transitionDuration={700} delay={700} >
          <AboutMe />
        </FadeIn>
      }
    </div>
  )
})