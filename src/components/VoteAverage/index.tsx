import React from 'react';
import { Spin } from "react-cssfx-loading";
import s from './styles.module.scss';

interface VoteAverageProps {
  height?: number | string;
  width?: number | string;
  vote_average?: number;
}

export function VoteAverage({vote_average = 0, height, width}: VoteAverageProps) {
  return (
    <div className={s.container}>
      <div 
        className={s.circle} 
        style={{
          height: height,
          width: width
        }}
      >
        <span>{vote_average*10}%</span>
      </div>
    </div>
  )
}