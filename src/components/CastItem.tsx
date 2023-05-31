import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditInterface'

interface Props {
  actor: Cast
}

export const CastItem = ({ actor }: Props) => {
  
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path }`
  
  return (
    <View style={styles.container}>
      { actor.profile_path &&
        <Image 
          source={{uri}}
          style={{
            width: 70,
            height: 70,
            borderRadius: 10,
          }}
        />
      }
      <View style={styles.actorInfo}>
        <Text style={{fontWeight: 'bold', fontSize: 20 }}>
          {actor.name}
        </Text>
        <Text style={{fontWeight: 'normal', fontSize: 18, color:'grey'}}>
          {actor.character}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    // paddingLeft:10,
    height:70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.6 ,
    elevation: 7,
  },
  actorInfo: {
    marginHorizontal: 10,
    marginTop: 10 ,

  }
})
