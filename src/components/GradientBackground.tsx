import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradiantContext } from '../context/GradiantContext'
import { useFade } from '../hooks/useFade'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

  const { colors, prevColors, setSecondsColors } = useContext(GradiantContext)
  const {FadeIn, FadeOut, opacity} = useFade()

  useEffect(() => {
    FadeIn(() => {
      setSecondsColors(colors)
      FadeOut()
    })

  }, [colors])
  

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[ prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x:0.1,y:0.1}}
        end={{x:0.5, y:0.67}}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity
        }}
      >
        <LinearGradient
          colors={[ colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x:0.1,y:0.1}}
          end={{x:0.5, y:0.67}}
        />
      </Animated.View>

      {children}
    </View>
  )
}
