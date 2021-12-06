import styles from './styles.module.scss'

type GenresTypes = {
  genres: string[];
}
function Genres({ genres }: GenresTypes) {
  return (
    <div>
      <ul className={styles.genresList}>
        {genres.map((types,idx) => {
          return <li key={idx} className={styles.genres}><span>{types}</span></li>
        })}
      </ul>
    </div>
  )
}

export default Genres