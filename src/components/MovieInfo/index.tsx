import { MovieType } from '../../pages/Movie'
import Genres from '../Genres'
import styles from './styles.module.scss'
import ContentLoader from 'react-content-loader'
import { Spin } from "react-cssfx-loading";

type MovieInforType = {
  movie: MovieType | null;
}

function MovieInfo({movie}: MovieInforType) {

  return (
    <div>
      <div className={styles.headerContainer}>
          <div className={styles.details}>
              {movie ? 
                <h1>{movie.title}</h1>
                : 
                <ContentLoader
                  height={80}
                  width={'100%'}
                >
                  <rect x="50" y="30" rx="4" ry="4" width="20%" height="20" />
                </ContentLoader>
              }
            <span>{movie?.release_date}</span>
          </div>
        </div>
        <div className={styles.bodyContainer}>
          <div className={styles.wrapper}>
            <div className={styles.description}>
              <div className={styles.sinopse}>
                <h2>Sinopse</h2>
                {movie ?
                  <p className={styles.overview}>{movie.overview}</p>
                  :
                  <ContentLoader
                    height={80}
                    width={'100%'}
                  >
                    <rect x="0" y="10" rx="4" ry="4" width="100%" height="10" />
                    <rect x="0" y="30" rx="4" ry="4" width="100%" height="10" />
                  </ContentLoader>
                }
              </div>
              <div className={styles.information}>
                <h2>Informações</h2>
                <div className={styles.infolist}>
                  <div className={styles.info}>
                    <span>Situação</span>
                    {movie ?
                      <span>{movie?.status}</span>
                      :
                      <ContentLoader
                        height={10}
                        width={50}
                      >
                        <rect x="0" y="0" rx="4" ry="4" width="50" height="10" />
                      </ContentLoader>
                    }
                  </div>
                  <div className={styles.info}>
                    <span>Idioma</span>
                    {movie ?
                      <span>{movie.original_language}</span>
                      :
                      <ContentLoader
                        height={10}
                        width={50}
                      >
                        <rect x="0" y="0" rx="4" ry="4" width="50" height="10" />
                      </ContentLoader>
                    }
                  </div>
                  <div className={styles.info}>
                    <span>Duração</span>
                    {movie ?
                      <span>{movie?.runtime}</span>
                      :
                      <ContentLoader
                        height={10}
                        width={50}
                      >
                        <rect x="0" y="0" rx="4" ry="4" width="50" height="10" />
                      </ContentLoader>
                    }
                  </div>
                  <div className={styles.info}>
                    <span>Orçamento</span>
                    {movie ?
                      <span>{movie?.budget}</span>
                      :
                      <ContentLoader
                        height={10}
                        width={50}
                      >
                        <rect x="0" y="0" rx="4" ry="4" width="50" height="10" />
                      </ContentLoader>
                    }
                  </div>
                  <div className={styles.info}>
                    <span>Receita</span>
                    {movie ?
                      <span>{movie?.revenue}</span>
                      :
                      <ContentLoader
                        height={10}
                        width={50}
                      >
                        <rect x="0" y="0" rx="4" ry="4" width="50" height="10" />
                      </ContentLoader>
                    }
                  </div>
                  <div className={styles.info}>
                    <span>Lucro</span>
                    {movie ?
                      <span>{movie?.gain}</span>
                      :
                      <ContentLoader
                        height={10}
                        width={50}
                      >
                        <rect x="0" y="0" rx="4" ry="4" width="50" height="10" />
                      </ContentLoader>
                    }
                  </div>
                </div>
                <div className={styles.more}>
                  {movie ? 
                    <Genres genres={movie?.genres}/>
                    :
                    <ContentLoader
                      height={30}
                      width={'100%'}
                    >
                      <rect x="0" y="0" rx="4" ry="4" width="100" height="30" />
                    </ContentLoader>
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
              {movie ?
                <img className={styles.post} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="" />
                :
                <ContentLoader
                  height={'100%'}
                  width={'100%'}
                >
                  <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
                </ContentLoader>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieInfo