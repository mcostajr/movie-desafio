import Genres from '../Genres'
import styles from './styles.module.scss'
import ContentLoader from 'react-content-loader'
import { Spin } from "react-cssfx-loading";
import { useContext } from 'react';
import { MovieInformation } from './MovieInformation';
import { MovieType } from '../../pages/Movie';
import { LoaderText } from '../LoaderText';
import { VoteAverage } from '../VoteAverage';

interface MovieInfoType {
  movie?: MovieType | null;
}

function MovieInfo({movie}: MovieInfoType) {

  return (
    <div>
      <header className={styles.headerContainer}>
        <div className={styles.details}>
          {!movie ? 
            <LoaderText marginLeft="30" height="20" width="40%"/>
            : 
            <h1>{movie.title}</h1>
          }
          <span>{movie?.release_date}</span>
        </div>
      </header>
      <div className={styles.bodyContainer}>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <div className={styles.sinopse}>
              <h2>Sinopse</h2>
              {!movie ?
                <LoaderText height="10" line={5}/>
                :
                <p className={styles.overview}>{movie.overview}</p>
              }
            </div>
            
            <MovieInformation />

            <div className={styles.more}>
              {!movie ? 
                <LoaderText radiusX="20" radiusY="20" height="30" width="100"/>
                :
                <Genres genres={movie.genres}/>
              }
              <VoteAverage vote_average={movie?.vote_average}/>
            </div>
          </div>
        </div>
        <div className={styles.postContainer}>
          <div className={styles.postWrapper}>
            {!movie ?
              <Spin height="5em" width="5em" color="#c6cbd1"/>
              :
              <img className={styles.post} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo