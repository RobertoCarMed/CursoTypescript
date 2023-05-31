import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface'

interface moviesState {
  nowPlaying: Movie[],
  popular: Movie[],
  topRated: Movie[],
  upcoming: Movie[],
   
}

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [ moviesState, setMoviesState ] = useState<moviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  }) 

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing')
    const popularPromise    = movieDB.get<MovieDBMoviesResponse>('/popular')
    const topRatedPromise   = movieDB.get<MovieDBMoviesResponse>('/top_rated')
    const upcomingPromise   = movieDB.get<MovieDBMoviesResponse>('/upcoming')
    
    const res = await Promise.all([
      nowPlayingPromise, 
      popularPromise, 
      topRatedPromise, 
      upcomingPromise
    ])
    
    setMoviesState({
      nowPlaying: res[0].data.results,
      popular: res[1].data.results,
      topRated: res[2].data.results,
      upcoming: res[3].data.results,
    })

    setIsLoading(false)
  }
  
  useEffect(() => {
    //now_paying 
    getMovies();
  
  }, [])
  
  return ({
    ...moviesState,
    isLoading
    
  })
}
