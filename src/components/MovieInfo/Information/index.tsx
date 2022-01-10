import React from 'react';
import { DetailsInfo, DetailsInfoProps } from './DetailsInfo';

import s from './styles.module.scss';

interface MovieInformationProps {
  movieInfo: DetailsInfoProps[];
}

export function MovieInformation({movieInfo}: MovieInformationProps) {
  return (
    <div className={s.information}>
      <h2>Informações</h2>
      <div className={s.infolist}>
      {movieInfo.map((item: DetailsInfoProps) =>
        <DetailsInfo 
          title={item.title}
          content={item.content}
          key={item.title}
        />
      )}
      </div>
    </div>
  )
}