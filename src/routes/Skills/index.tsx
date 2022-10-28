import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Skills.module.scss';
import { SkillItem } from '../../components/SkillItem';
import { SkillIDetail } from '../../components/SkillIDetail';
import FadeIn from '../../components/FadeIn';
import { Iskill, manager, tool } from '../../stores/skills/type';
import { store } from '../../stores/skills/store'
import { AboutMe } from '../../components/AboutMe';

export const Skills: React.FC = observer(() => {
  const jsonFile: Iskill[] = require('../../assets/jsons/skils.json')
  // const jsonFile: Iskill[] = require('../../assets/jsons/skils.json')
  // const [currentSkill, setCurrentSkill] = useState<Iskill | null>()
  // const [currentTool, setCurrentTool] = useState<tool | null>()
  // const [currentManager, setCurrentManager] = useState<Iskill | null>()
  // const [managers, setManagers] = useState<manager[]>([])
  // const [tools, setTools] = useState<tool[]>([])
  //const [activeId, setActiveId] = useState<number>()
  //console.log('jsonFile', jsonFile)
  // function addSkills(lkm: Iskill) {
  //   setTools([]);
  //   setManagers([]);
  //   setCurrentTool(null);
  //   setCurrentManager(null);
  //   setCurrentSkill(lkm);
  //   if (lkm.tools) {
  //     lkm.tools.map((obj: tool) => {
  //       setTools((prev) => [...prev, obj])
  //     })
  //   }
  //   if (lkm.stateManagers) {
  //     lkm.stateManagers.map((obj: manager) => {
  //       setManagers((prev) => [...prev, obj])
  //     })
  //   }
  // }
  //
  useEffect((() => {
    //console.log(store.tools?.map((sKitem: any) => (console.log(sKitem.name))))
    // store.setManagers(store.currentSkill.stateManagers)
    // store.setCurrentTool(store.currentSkill.tools)

    return store.setClearItem()
  }), [])

  useEffect((() => {
    //store.setClearManagersTools()

    console.log('store.tools', store.tools)
    console.log('store.managers', store.managers)

  }), [store.currentSkill])

  useEffect((() => {
    //store.setClearManagersTools()
    //store.setManagersTools()

    store.setTools(jsonFile[0].tools)
    store.setManagers(jsonFile[0].stateManagers)

    console.log('store.tools', store.tools)
    console.log('store.managers', store.managers)

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