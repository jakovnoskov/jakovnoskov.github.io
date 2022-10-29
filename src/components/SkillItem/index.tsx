import { FC, useEffect, useState } from 'react'
import { Iskill } from '../../stores/skills/type'
import { getRandomInt } from '../../utils/getRandomInt'
import FadeIn from '../FadeIn'
import styles from './SkillItem.module.scss'

type СategoriesProps = {
  value: Iskill
  active?: string
  cat: string
  currentCat: string
  onClick?: (cat: string, idx: Iskill) => void
  setMobileSkill: React.Dispatch<React.SetStateAction<boolean>>
}

export const SkillItem: FC<СategoriesProps> = ({
  value,
  active,
  cat,
  currentCat,
  onClick,
  setMobileSkill
}) => {

  const [vis, setVisibility] = useState(true);
  const [mount, setMount] = useState(false);
  const [opacityStyle, setOpacity] = useState(0);
  const [translateStyle, setTranslateStyle] = useState("translateY(20px)");

  function onClickSkill(cat: string, value: Iskill) {
    setMobileSkill(true)
    onClick && (onClick(cat, value))
  }

  /** un-mount */
  useEffect(() => {

    if (mount) {
      setVisibility(false)
      let timerFadeout = setTimeout(
        () => {
          setOpacity(0);
          setTranslateStyle("translateY(20px)");
        }, 100);
      let timer = setTimeout(
        () => {
          setOpacity(1);
          setTranslateStyle("none");
          setVisibility(true)
        },
        getRandomInt(300, 600)
      );

      return () => {
        clearTimeout(timer);
        clearTimeout(timerFadeout);
      }
    } else {
      setMount(true)
    }
  }, [value.name, value.id]);

  useEffect(() => {
    let timer = setTimeout(
      () => {
        setOpacity(1);
        setTranslateStyle("none");
      },
      getRandomInt(300, 600)
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={styles.skillIttemWrapper}
      style={{
        transition: `opacity ${getRandomInt(300, 600)}ms, transform ${getRandomInt(300, 600)}ms`,
        transform: translateStyle,
        opacity: opacityStyle,
      }}
    >
      <button
        onClick={
          onClick && (() => onClickSkill(cat, value))}
        className={styles.skillItem + ' ' +
          (cat === currentCat && active && active === String(value.id) ? styles.active : '')
        }
      >
        {/*  {id} - {name} - {type} 
      {cat === currentCat && active && active === String(value.id) && 'active'}
      -{active}
      -{value.id}
      -{cat}*/}
        <span
          style={{
            visibility: vis ? 'visible' : 'hidden',
          }}
        >
          {value.name}</span>
      </button>

    </div>
  )
}