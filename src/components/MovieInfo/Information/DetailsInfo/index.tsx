import React from 'react';
import { LoaderText } from '../../../Loader/LoaderText';

import s from './styles.module.scss';

export interface DetailsInfoProps {
  title: string;
  content?: string;
}

export function DetailsInfo({title, content}: DetailsInfoProps) {
  return (
    <div className={s.info}>
      <h3>{title}</h3>
      {!content ?
        <LoaderText width="80"/>
      :
        content
      }
    </div>
  )
}