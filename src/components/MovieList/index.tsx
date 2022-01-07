import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';
import Genres from '../Genres';
import LoadingMoveList from '../LoadingMoveList';
import { MovieCard } from '../MovieCard';
import styles from './styles.module.scss';

function MovieList() {

  const { movies, page } = useContext(SearchContext);

  return (
    <div className={styles.container}>
      {!movies ? 
          <LoadingMoveList />
        :
          !movies.length ? 
          <div>
            <h1>Nenhum Filme encontrado</h1>
          </div>
          :
          <ul className={styles.movieList}>
            {movies?.slice((page-1) * 5, page * 5).map(movie => {
              return (
                <li key={movie.id}>
                  <MovieCard movieData={movie}/>
                </li>
              )
            })}
          </ul>
      }
    </div>
  )
}

export default MovieList;