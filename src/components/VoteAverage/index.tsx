import React from 'react';
import { Spin } from "react-cssfx-loading";
import s from './styles.module.scss';

interface VoteAverageProps {
  vote_average?: number;
}

export function VoteAverage({vote_average = 0}: VoteAverageProps) {
  return (
    <div className={s.container}>
      <div className={s.circle}>
        {!vote_average ? 
          <Spin height="1em" width="1em" color="#f5f6f7"/>
          :
          <span>{vote_average*10}%</span>
        }
      </div>
    </div>
  )
}