import React, { useState, useEffect } from 'react'
import { job, JobIttem } from '../../components/JobIttem'
import './jobexperience.scss'
//import '../../scss/main.scss'

const jobJsonFile = require('../../assets/jsons/career.json')

export default function JobExperience() {

  return (
    <div className="jobBox">

      <div className="job-header">
        <div className="job-header-info">
          <h1 className="job-header-title">Опыт работы</h1>
          <p className="job-header-description">
            8 лет 6 месяцев
          </p>
        </div>
        {/* <div className="job-header-link">
          <div className="job-header-link-title">Скачать резюме</div>
          <div className="job-header-link-wrapper"> <a>PDF</a></div>
          <div className="job-header-link-wrapper"><a>Word</a></div>
        </div> */}
      </div>

      {jobJsonFile.map((item: job) => (
        <JobIttem
          key={item.id}
          {...item}
        />
      ))}

    </div>
  )
}