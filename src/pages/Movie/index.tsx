import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/axios"
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString"
import styles from './styles.module.scss'
import YouTube from "react-youtube"
import MovieInfo from "../../components/MovieInfo"
import { useTranslation } from "react-i18next"

export type MovieType = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  revenue: string;
  budget: string;
  status: string;
  runtime: string;
  genres: string[];
  gain: string;
  original_language: string;
  vote_average: number;
  video: VideoType;
}

interface VideoType {
  key: string;
}


function Movie() {

  let { id } = useParams()
  const [ movie, setMovie] = useState<MovieType | null>(null)
  const { t } = useTranslation()

  async function fetchMovie() {
    const { data} = await api.get(`/movie/${id}`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'pt-BR',
        append_to_response: 'videos'
      }
    })

    const movie = {
      id: data.id,
      title: data.title,
      release_date: data.release_date ? 
        format(parseISO(data.release_date), 'd/MM/yyyy', {locale: ptBR}): 
        '',
      overview: data.overview,
      poster_path: data.poster_path,
      revenue: data.revenue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
      budget: data.budget.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
      status: t(data.status),
      runtime: convertDurationToTimeString(Number(data.runtime)),
      genres: data.genres.map((genre: any) => genre.name),
      gain: data.revenue > 0 ? 
        (data.revenue - data.budget).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}):
        (0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
      original_language: t(data.original_language),
      vote_average: data.vote_average,
      video: data.videos.results.find((video: any) => video.official === true)
    }

    setMovie(movie)
  }

  useEffect(() => {
    if(movie)
      return

      fetchMovie()
  })

  return (
    <div className={styles.container}>
      <section className={styles.movieSec}>
        <MovieInfo movie={movie}/>
      </section>
      <section className={styles.videoSec}>
        {movie?.video && 
          <YouTube 
            className={styles.trailer} 
            videoId={movie?.video.key}
          />
        }
      </section>
    </div>
  )
}

export default Movie