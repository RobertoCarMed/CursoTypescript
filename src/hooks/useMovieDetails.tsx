import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Cast, CreditsResponse } from "../interfaces/creditInterface"
import { MovieFull } from "../interfaces/movieInterface"

interface MovieDetails {
  isLoading: boolean,
  movieFull?: MovieFull
  cast: Cast[],
}
 
export const useMovieDetails = ( movieId: number) => {
  
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
     movieFull: undefined,
     cast: []
  })

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`)
    const movieCastPromise    = movieDB.get<CreditsResponse>(`/${movieId}/credits`)


   const res = await Promise.all([
      movieDetailsPromise,
      movieCastPromise
    ])

    setState({
      isLoading: false,
      movieFull: res[0].data,
      cast: res[1].data.cast
    })
  }

  useEffect(() => {
    console.log(movieId)
    getMovieDetails()    
  }, [])
  


  return {
    ...state
  }  
}
