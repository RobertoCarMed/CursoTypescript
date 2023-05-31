import React, { useEffect } from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'


// import { Movie } from '../interfaces/movieInterface'
import { RootStackParams } from '../navigation/Navigation'
import movieDB from '../api/movieDB'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'

const { height: ScreenHeigth } = Dimensions.get('screen')

interface Props extends StackScreenProps<RootStackParams,  'DetailsScreen'> {}

export const DetailScreen = ({ route, navigation  }: Props) => {

  const movie = route.params

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const { cast, isLoading, movieFull } = useMovieDetails(movie.id)

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{uri}}
          style={styles.image}
        />
      </View>

      <View style={styles.marginContainer}>
        <Text style={ styles.subTitle}>{movie.original_title}</Text>
        <Text style={ styles.title}>{movie.title}</Text>
      </View>
      
      
      {isLoading 
        ? <ActivityIndicator size={30} color='grey'/>
        : <MovieDetails movieFull={ movieFull! } cast={ cast  }/>
      }

      {/* Boton para cerrar */}

      <TouchableOpacity
        style={styles.backButtom}
        onPress={()=> navigation.pop()}
      >
        <Icon 
          color='white' 
          size={50} 
          name='arrow-back-outline'
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30
  },
  imageContainer: {
    width: '100%',
    height: ScreenHeigth * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.6 ,

    elevation: 7, 
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButtom: {
    position: 'absolute',
    top: 35,
    left: 5
  }
})
 