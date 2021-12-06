import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';
import Genres from '../Genres';
import LoadingMoveList from '../LoadingMoveList';
import styles from './styles.module.scss';

function MovieList(props: any) {

  const { movies, page } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      {!movies ? (
        <LoadingMoveList />
      ) :
      (movies?.length ? 
        <ul className={styles.movieList}>
          {movies?.slice((page-1) * 5, page * 5).map(movie => {
            return (
              <li key={movie.id}>
                <div className={styles.movieContainer}>
                  <Link to={`/movie/${movie.id}`}>
                    <div className={styles.postContainer}>
                      <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
                    </div>
                  </Link>
                  <div className={styles.movieDescription}>
                    <div className={styles.descriptionHeader}>
                    </div>
                    <div className={styles.descriptionTitle}>
                      <div className={styles.descriptionTitleWrapper}>
                        <div className={styles.containerCircle}>
                          <div className={styles.circle}>
                            {movie && <span>{movie.vote_average*10}%</span>}
                          </div>
                        </div>
                        <div className={styles.rightWrapper}>
                          <Link to={`/movie/${movie.id}`}>
                            <span className={styles.title}>{movie.title}</span>
                          </Link>
                          <span className={styles.date}>{movie.release_date}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.descriptionAbout}>
                      <div className={styles.descriptionAboutWrapper}>
                        <p className={styles.description}>{movie.overview}</p>
                        <Genres genres={movie.genre_ids}/>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        :
        <div>
          <h1>Nenhum Filme encontrado</h1>
        </div>
      )}
    </div>
  )
}

export default MovieList;