 import React, { useEffect, useRef } from 'react'
import { View, Animated, Button } from 'react-native'
import { useFade } from '../hooks/useFade'
 
export const FadeScreen = () => {
  
  const { opacity, FadeIn, FadeOut } = useFade()

  return (
    <View 
      style={{ 
        flex: 1, backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 20,
          opacity: opacity
        }}
      />

      <Button
        title='Oprime aqui'
        onPress={() => FadeIn()}
        color='black'
      />
      <Button
        title='Oprime aqui'
        onPress={FadeOut}
        color='black'
      />
    </View>
  )
}
 