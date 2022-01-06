import { useContext } from 'react';
import ContentLoader from 'react-content-loader'
import { MovieContext } from '../../../contexts/MovieContext';

import styles from './styles.module.scss'

interface SubInfoProps {
  title: string;
  value: string | undefined;
}

function DetailsInfo({title, value}: SubInfoProps) {

  const {movie} = useContext(MovieContext);

  return (
    <div className={styles.info}>
    <span>{title}</span>
      {!movie ?
        <ContentLoader
        height={10}
        width={50}
        >
          <rect x="0" y="0" rx="4" ry="4" width="50" height="10" />
        </ContentLoader>
        :
        <span>{value}</span>
      }
    </div>
  )
}
export default DetailsInfo