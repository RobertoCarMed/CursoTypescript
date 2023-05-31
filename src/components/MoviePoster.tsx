import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
  movie: Movie,
  height?: number,
  width?: number
}

export const MoviePoster = ( { movie, height = 420, width = 300}: Props) => {

  const navigation = useNavigation()

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  // console.log(movie.poster_path)
  
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('DetailsScreen', movie)}
      activeOpacity={0.8}
      style={{ 
        width, 
        height, 
        marginHorizontal: 8  
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri}}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius:18,
  },
  imageContainer: {
    flex: 1, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.6 ,

    elevation: 7,
  }
})
