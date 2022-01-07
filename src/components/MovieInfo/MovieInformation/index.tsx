import React from 'react';
import { LoaderText } from '../../LoaderText';

import s from './styles.module.scss';

interface DetailsInfoProps {
  items: Item[];
}

interface Item {
  title: string;
  content?: string;
}

const item: Item[] = [
  { title: 'Situação' },
  { title: 'Idioma' },
  { title: 'Duração' },
  { title: 'Orçamento' },
  { title: 'Receita' },
  { title: 'Lucro' }
]

export function MovieInformation() {
  return (
    <div className={s.information}>
      <h2>Informações</h2>
      <div className={s.infolist}>
        {item.map((item) =>
          <div className={s.info}>
            <h3>{item.title}</h3>
            <LoaderText width="80"/>
          </div>
        )}
      </div>
    </div>
  )
}

// export function DetailsInfo({title, value}: DetailsInfoProps) {
//   return (
//       <DetailsInfo title="Situação" value={situation}/>
//       <DetailsInfo title="Idioma" value={language}/>
//       <DetailsInfo title="Duração" value={duration}/>
//       <DetailsInfo title="Orçamento" value={budget}/>
//       <DetailsInfo title="Receita" value={revenue}/>
//       <DetailsInfo title="Lucro" value={gain}/>
//   )
// }