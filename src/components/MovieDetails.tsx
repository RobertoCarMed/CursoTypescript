import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Cast } from '../interfaces/creditInterface'
import { MovieFull } from '../interfaces/movieInterface'
import currencyFormater from 'currency-formatter'
import { CastItem } from './CastItem'
import { FlatList } from 'react-native-gesture-handler'

interface Props {
  movieFull: MovieFull,
  cast: Cast[]
}

export const MovieDetails = ( { movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection:'row'}}>
          <Icon 
            name='star-outline'
            size={16}
            color='grey'
          />

          <Text style={{ marginLeft: 5}}>{movieFull.vote_average}</Text>

          <Text style={{ marginLeft:5}}>
             - {movieFull.genres.map(g=>g.name).join(', ')}
          </Text>

        </View>

        {/* Historia */}
        <Text style={{marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>
          Historia
        </Text>
        <Text style={{marginTop: 0, fontSize: 15 }}>
          {movieFull.overview}
        </Text>

        {/* Presupuesto */}
        <Text style={{marginTop: 10, fontSize: 23, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{marginTop: 0, fontSize: 15 }}>
          { currencyFormater.format(movieFull.budget, { code: 'USD' }) }
        </Text>
      </View>
      
      {/* Casting */}
      <View style={{ marginTop: 20, marginHorizontal:10, marginBottom:100}}>
        <Text style={{marginTop: 10, fontSize: 23, fontWeight: 'bold', marginHorizontal:20}}>
          Actores
        </Text>

        <FlatList
           data={cast}
           keyExtractor={(item)=> item.id.toString()}
           renderItem={ ({item}) => <CastItem actor={item}/>}
           horizontal
           showsHorizontalScrollIndicator={false}
           style={{marginTop:10, height: 100}}
        />
        {/* <CastItem actor={cast[0]}/> */}
      </View>
    </> 
  )
}
