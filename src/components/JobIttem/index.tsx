import React, { useState } from 'react';
import './jobIttem.scss'

export type job = {
  id: string,
  title: string,
  logo?: string,
  position?: string,
  link?: string,
  period?: string[],
  description?: string,
  duties?: string[],
  active?: number,
}

export const JobIttem: React.FC<job> = ({
  id,
  title,
  logo,
  period,
  position,
  description,
  duties,
  active
}) => {
  return (
    <div className="jobIttemBox">

      <div className="companyInfoBox">
        {logo &&
          <img
            src={require(`./logo/${logo}.svg`)}
            className="job-logo"
            alt={logo}
          />
        }
        <div className="info">
          <div className="main">{title}</div>
          <div className="sub">{period?.[0]} - {period?.[1]}</div>
        </div>

      </div>

      <div className="jobTimeline">
        <div className="description">
          <div className="description-wrap">
            <div className="position">{position}</div>
            <div className="description-title">{description}</div>
            <ul className="duties">
              {duties?.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>



    </div>
  )
}