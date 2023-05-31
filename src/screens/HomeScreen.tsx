import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native' 

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import ImageColors from 'react-native-image-colors'

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'
import { HorizontalSlider } from '../components/HorizontalSlider'
import { GradientBackground } from '../components/GradientBackground'
import { getImageColors } from '../helpers/getImageColors'
import { GradiantContext } from '../context/GradiantContext'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

  const { 
    nowPlaying,
    popular,
    topRated,
    upcoming ,
    isLoading 
  } = useMovies()
  const { top } = useSafeAreaInsets()
  const {setMainColors, setSecondsColors } = useContext(GradiantContext)

  const getPosterColors = async ( index: number) => {
    const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[index].poster_path}`
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri)
    
    setMainColors({
      primary,
      secondary
    })

    console.log(nowPlaying[index].title, primary, secondary)
  }

  useEffect(() => {
    if (nowPlaying.length > 0) getPosterColors(0)
  }, [nowPlaying])
  

  if(isLoading){
    return (
      <View style={{flex: 1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator color={'blue'}/>
      </View>
    )
  } 

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          {/* Carousel principal */}
          <View style={{ height: 440 }}>
            <Carousel 
              data={nowPlaying}
              renderItem={ ({ item }: any) => <MoviePoster movie={ item } />}
              sliderWidth={windowWidth}
              itemWidth={300}
              onSnapToItem={(index) => getPosterColors(index)}
            />
          </View>

          {/* Peliculas Populares */}
          <HorizontalSlider title='En cine' movies={nowPlaying}/>
          <HorizontalSlider title='Peliculas populares' movies={popular}/>
          <HorizontalSlider title='Mejor calificadas' movies={topRated}/>
          <HorizontalSlider title='Proximos estrenos' movies={upcoming}/>
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
