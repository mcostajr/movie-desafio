import { createContext } from "react"


export interface MovieType {
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

interface MovieContextProps {
  movie: MovieType | null;
}

export const MovieContext = createContext({} as MovieContextProps)
