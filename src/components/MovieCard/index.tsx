import { Link } from "react-router-dom";
import Genres from "../Genres";
import s from './styles.module.scss';

interface MovieDataProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genre_ids: string[];

}

interface MovieCardProps {
  movieData: MovieDataProps;
}

export function MovieCard({movieData}: MovieCardProps) {
  return (
    <div>
      <div className={s.movieContainer}>
        <Link to={`/movie/${movieData.id}`}>
          <div className={s.postContainer}>
            <img className={s.poster} src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="poster" />
          </div>
        </Link>
        <div className={s.movieDescription}>
          <div className={s.descriptionHeader}>
          </div>
          <div className={s.descriptionTitle}>
            <div className={s.descriptionTitleWrapper}>
              {/* <div className={s.containerCircle}>
                <div className={s.circle}>
                  {movie && <span>{vote_average*10}%</span>}
                </div>
              </div> */}
              <div className={s.rightWrapper}>
                <Link to={`/movie/${movieData.id}`}>
                  <span className={s.title}>{movieData.title}</span>
                </Link>
                <span className={s.date}>{movieData.release_date}</span>
              </div>
            </div>
          </div>
          <div className={s.descriptionAbout}>
            <div className={s.descriptionAboutWrapper}>
              <p className={s.description}>{movieData.overview}</p>
              <Genres genres={movieData.genre_ids}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}