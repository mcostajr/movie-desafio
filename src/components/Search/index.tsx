import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import {DebounceInput} from 'react-debounce-input';
import { SearchContext } from '../../contexts/SearchContext';

function Search(){

  const { 
    fetchMovieList, 
    fetchMovieSearch, 
    fetchMovieSearchYear, 
    fetchMovieSearchGener 
  } = useContext(SearchContext);
  const [ query, setQuery ] = useState('');
  const [ isSearch, setIsSearch ] = useState(false);

  useEffect(() => {
    if(!query.length)
    setTimeout(() => fetchMovieList(),5000)  
    

    if(query.length > 2) {
      setIsSearch(true);
    }

  },[query])

  useEffect(() => {
    if(!isSearch)
      return

    const year = Number(query);
  
    const genre = JSON.parse(localStorage.getItem('genres') as any).genres
      .find((item: any) => item.name.toLowerCase() === query.toLowerCase());

    
    setIsSearch(false);
    if(year) {
      fetchMovieSearchYear(year);
    } else if(genre) {
      fetchMovieSearchGener(genre.id);
    } else {
      fetchMovieSearch(query);
    }
  },[isSearch]);

  return(
    <div className={styles.container}>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        className={styles.searchBar}
        placeholder="Busque um filme por nome, ano ou gênero..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default Search