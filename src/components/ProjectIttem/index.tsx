import React from 'react'
import styles from './ProjectIttem.module.scss'

type ProjectIttemProps = {
  id: string,
  logo: string,
  name?: string,
  link: string,
}

export const ProjectIttem: React.FC<ProjectIttemProps> = ({
  id,
  logo,
  name,
  link,
}) => {
  return (
    <a href={link} target="_blank" className={styles.iconWrapper}>
      <div className={styles.icon + ' ' + styles.blue}>
        <img
          src={require(`./logo/${logo}.svg`)}
          className={styles.projectImg}
          alt={logo}
        />
      </div>
      <div className={styles.iconTitle}>
        {name}
      </div>
    </a>
  )
}