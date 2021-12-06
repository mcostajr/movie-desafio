import React, { createContext, useState } from "react";
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { changeIdForNameGenres } from '../utils/changeIdForNameGenres';
import { api } from "../services/axios";

export type MovieType = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  genre_ids: string[];
}

type searchContextType = {
  page: number;
  changePage: (value: number) => void;
  movies: MovieType[] | null;
  fetchMovieList: () => void;
  fetchMovieSearch: (search: string) => void;
  fetchMovieSearchYear: (search: number) => void;
  fetchMovieSearchGener: (search: string) => void;
}

type SearchProviderType ={
  children: React.ReactNode;
}

export const SearchContext = createContext({} as searchContextType)

export default function SearchProvider({children}: SearchProviderType) {

  const [ page, setPage ] = useState(1);
  const [ movies, setMovies ] = useState<MovieType[] | null>(null);
  const genres = JSON.parse(localStorage.getItem('genres') as any);

  function changePage(value: number) {
    setPage(value);
    window.scrollTo(0, 0);
  }

  async function fetchGenres() {
    const { data } = await api.get('/genre/movie/list', {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'pt-BR'
      }
    });
  
    return localStorage.setItem('genres',JSON.stringify(data));
  }

  async function fetchMovieList() {
    if(!genres)
      fetchGenres();

    try {
      setMovies(null)
      const { data } = await api.get('/discover/movie', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          language: 'pt-BR',
          region: 'BR',
          sort_by: 'popularity.desc',
        }
      })

      const movies = data.results.map((movie: any) => {
        return {
          id: movie.id,
          title: movie.title,
          release_date: movie.release_date ? format(parseISO(movie.release_date), 'd/MM/yyyy', {locale: ptBR}): '',
          vote_average: movie.vote_average,
          poster_path: movie.poster_path,
          overview: movie.overview,
          genre_ids: changeIdForNameGenres(movie.genre_ids)
        }
      });
      
      setMovies(movies);
      setPage(1);
    } catch(err) {
      setMovies([]);
    }
  }

  async function fetchMovieSearch(search: string) {
    if(!genres)
      fetchGenres();

    const { data } = await api.get('/search/movie', {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'pt-BR',
        query: search,
        region: 'BR',
      }
    })
      
    const movies = data.results.map((movie: any) => {
      return {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date ? format(parseISO(movie.release_date), 'd/MM/yyyy', {locale: ptBR}) : '',
        vote_average: movie.vote_average,
        poster_path: movie.poster_path,
        overview: movie.overview,
        genre_ids: movie.genre_ids ? changeIdForNameGenres(movie.genre_ids) : movie.genre_ids
      }
    });

    setMovies(movies);
    setPage(1);
  }

  async function fetchMovieSearchYear(search: number) {
    if(!genres)
      fetchGenres();

    const { data } = await api.get(`/discover/movie?primary_release_date.gte=${search}-01-01&primary_release_date.lte=${search}-12-31`, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'pt-BR',
        region: 'BR',
        with_release_type: 2|3,
        sort_by: 'popularity.desc',
      }
    });
      
    const movies = data.results.map((movie: any) => {
      return {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date ? format(parseISO(movie.release_date), 'd/MM/yyyy', {locale: ptBR}) : '',
        vote_average: movie.vote_average,
        poster_path: movie.poster_path,
        overview: movie.overview,
        genre_ids: movie.genre_ids ? changeIdForNameGenres(movie.genre_ids) : movie.genre_ids
      }
    });

    setMovies(movies);
    setPage(1);
  }

  async function fetchMovieSearchGener(search: string) {
    if(!genres)
      fetchGenres();
    
    const { data } = await api.get('/discover/movie', {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'pt-BR',
        region: 'BR',
        with_genres: search,
        sort_by: 'popularity.desc',
      }
    })
      
    const movies = data.results.map((movie: any) => {
      return {
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date ? format(parseISO(movie.release_date), 'd/MM/yyyy', {locale: ptBR}) : '',
        vote_average: movie.vote_average,
        poster_path: movie.poster_path,
        overview: movie.overview,
        genre_ids: movie.genre_ids ? changeIdForNameGenres(movie.genre_ids) : movie.genre_ids
      }
    })

    setMovies(movies);
    setPage(1);
  }

  return (
    <SearchContext.Provider value={{
      page,
      changePage,
      movies,
      fetchMovieList,
      fetchMovieSearch,
      fetchMovieSearchYear,
      fetchMovieSearchGener
    }}>
      {children}
    </SearchContext.Provider>
  )
}