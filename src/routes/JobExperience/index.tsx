import React, { useState, useEffect } from 'react'
import FadeIn from '../../components/FadeIn'
import { job, JobIttem } from '../../components/JobIttem'
import { getRandomEmoji } from '../../utils/getRandomEmoji'
import { getRandomInt } from '../../utils/getRandomInt'
import './jobexperience.scss'
//import '../../scss/main.scss'

const jobJsonFile = require('../../assets/jsons/career.json')

export default function JobExperience() {
  const [generateEmoji, setGenerateEmoji] = useState(false)
  const [localEmoji, setLocalEmoji] = useState(getRandomEmoji())

  return (
    <div className="jobBox">

      <div className="job-header">
        <div className="job-header-info">
          <FadeIn
            className="job-header-title"
            wrapperTag="h1"
            delay={getRandomInt(300, 900)}
            transitionDuration={getRandomInt(300, 900)}
          >
            Опыт работы
          </FadeIn>
          <FadeIn
            className="job-header-description"
            wrapperTag="p"
            childTag="span"
            delay={getRandomInt(300, 900)}
            transitionDuration={getRandomInt(300, 900)}
          >
            8 лет 6 месяцев
          </FadeIn>

        </div>
        <div className="job-header-link">

          <FadeIn
            className="job-header-title"
            wrapperTag="h1"
            delay={getRandomInt(300, 900)}
            transitionDuration={getRandomInt(300, 900)}
          >
            <button
              onClick={() => {
                setGenerateEmoji(!generateEmoji)
                setLocalEmoji(getRandomEmoji())
              }}
              className="secret-button">
              <span>Случайный emoji {localEmoji}</span>
            </button>
          </FadeIn>
          {/*<div className="job-header-link-title">Скачать резюме</div>
          <div className="job-header-link-wrapper"> <a>PDF</a></div>
          <div className="job-header-link-wrapper"><a>Word</a></div>*/}
        </div>
      </div>

      {jobJsonFile.map((item: job) => {
        return (
          <JobIttem
            key={item.id}
            generateEmoji={generateEmoji}
            {...item}
          />)
      }
      )}

    </div>
  )
}