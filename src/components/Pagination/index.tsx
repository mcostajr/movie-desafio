import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import styles from './styles.module.scss';

function Pagination() {
  const perPage = 5;
  const { movies, page, changePage } = useContext(SearchContext);
  const [ totalPages, setTotalPages ] = useState(0);

  useEffect(() => {
    if(!movies)
      return
      
    setTotalPages(Math.ceil(movies?.length/perPage));
  },[movies]);

  return (
    <div className={styles.container}>
      <ul className={styles.pageList}>
        {Array.from({length: totalPages}).map((num,idx) => {
          return (
            <li key={idx} onClick={() => changePage(idx+1)} className={((page === idx+1) ? styles.active : '')}>
              <span>{idx+1}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Pagination