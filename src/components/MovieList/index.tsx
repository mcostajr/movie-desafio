import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { LoadingCard } from '../Loader/LoadingMoveList';
import { MovieCard } from '../MovieCard';
import styles from './styles.module.scss';

function MovieList() {

  const { movies, page } = useContext(SearchContext);

  return (
    <div className={styles.container}>
    {movies?.length === 0 ?
      <div>
        <h1>Nenhum Filme encontrado</h1>
      </div>
      :
      <ul className={styles.movieList}>
        {!movies && Array.from({length: 5}).map((item,idx) =>
          <LoadingCard key={idx}/>  
        )}
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