import Genres from '../Genres'
import styles from './styles.module.scss'
import ContentLoader from 'react-content-loader'
import { Spin } from "react-cssfx-loading";
import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import SubInfo from './DetailsInfo';

function MovieInfo() {

  const { movie } = useContext(MovieContext);

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.details}>
          {!movie ? 
            <ContentLoader
              height={80}
              width={'100%'}
            >
              <rect x="50" y="30" rx="4" ry="4" width="20%" height="20" />
            </ContentLoader>
            : 
            <h1>{movie.title}</h1>
          }
          <span>{movie?.release_date}</span>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <div className={styles.sinopse}>
              <h2>Sinopse</h2>
              {!movie ?
                <ContentLoader
                  height={80}
                  width={'100%'}
                >
                  <rect x="0" y="10" rx="4" ry="4" width="100%" height="10" />
                  <rect x="0" y="30" rx="4" ry="4" width="100%" height="10" />
                </ContentLoader>
                :
                <p className={styles.overview}>{movie.overview}</p>
              }
            </div>
            <div className={styles.information}>
              <h2>Informações</h2>
              <div className={styles.infolist}>
                <SubInfo title="Situação" value={movie?.status}/>
                <SubInfo title="Idioma" value={movie?.original_language}/>
                <SubInfo title="Duração" value={movie?.runtime}/>
                <SubInfo title="Orçamento" value={movie?.budget}/>
                <SubInfo title="Receita" value={movie?.revenue}/>
                <SubInfo title="Lucro" value={movie?.gain}/>
              </div>
              <div className={styles.more}>
                {!movie ? 
                  <ContentLoader
                  height={30}
                  width={'100%'}
                  >
                    <rect x="0" y="0" rx="4" ry="4" width="100" height="30" />
                  </ContentLoader>
                  :
                  <Genres genres={movie.genres}/>
                }
                <div className={styles.containerCircle}>
                  <div className={styles.circle}>
                    {movie ? 
                      <span>{movie.vote_average*10}%</span>
                      :
                      <Spin color="#f5f6f7"/>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postContainer}>
          <div className={styles.postWrapper}>
            {!movie ?
              <ContentLoader
                height={'100%'}
                width={'100%'}
              >
                <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
              </ContentLoader>
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