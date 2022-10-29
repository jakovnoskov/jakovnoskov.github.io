import React, { useEffect, useState } from 'react';
import { getRandomEmoji } from '../../utils/getRandomEmoji';
import { getRandomInt } from '../../utils/getRandomInt';
import FadeIn from '../FadeIn';
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
  generateEmoji?: boolean,
}

export const JobIttem: React.FC<job> = ({
  id,
  title,
  logo,
  period,
  position,
  description,
  duties,
  active,
  generateEmoji,
}) => {

  return (
    <div className="jobIttemBox">

      <div className="companyInfoBox">
        {logo &&
          <FadeIn
            className="logo-wrapper"
            wrapperTag="div"
            delay={getRandomInt(300, 900)}
            transitionDuration={getRandomInt(300, 900)}
          >
            <img
              src={require(`./logo/${logo}.svg`)}
              className="job-logo"
              alt={logo}
            />
          </FadeIn>

        }
        <div className="info">
          <FadeIn
            className="main"
            wrapperTag="div"
            delay={getRandomInt(300, 900)}
            transitionDuration={getRandomInt(300, 900)}
          >
            {title}
          </FadeIn>
          <FadeIn
            className="sub"
            childClassName="sub-item"
            wrapperTag="div"
            childTag="span"
            delay={getRandomInt(300, 600)}
            transitionDuration={getRandomInt(300, 600)}
          >{period?.[0]} - {period?.[1]}
          </FadeIn>
        </div>

      </div>

      <div className="jobTimeline">
        <div className="description">
          <div className="description-wrap">
            <FadeIn
              className="position"
              wrapperTag="div"
              delay={getRandomInt(300, 900)}
              transitionDuration={getRandomInt(300, 900)}
            >
              {position}
            </FadeIn>
            <FadeIn
              className="description-title"
              wrapperTag="div"
              delay={getRandomInt(300, 900)}
              transitionDuration={getRandomInt(300, 900)}
            >
              {description}
            </FadeIn>
            <ul className="duties">
              {duties?.map((item: string, index: number) => {
                return (
                  <FadeIn
                    key={index}
                    className="duties-item"
                    wrapperTag="li"
                    delay={getRandomInt(300, 900)}
                    transitionDuration={getRandomInt(300, 900)}
                  >
                    <div
                      data-icon={`${generateEmoji ? getRandomEmoji() : getRandomEmoji()}`}
                      className="duties-item-wrapper"
                    >
                      {item}
                    </div>
                  </FadeIn>
                )
              }
              )}
            </ul>
          </div>
        </div>
      </div>



    </div>
  )
}