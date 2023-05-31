import { createContext, useState } from "react";

interface ImageColors {
  primary: string;
    secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setSecondsColors: (colors: ImageColors) => void;
}

export const GradiantContext = createContext({} as ContextProps)

export const GradiantProvider = ({ children }: any) => {

  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const setMainColors = ( colors: ImageColors ) => {
    setColors(colors)
  }

  const setSecondsColors = ( colors: ImageColors ) => {
    setPrevColors(colors )
  }

  return (
    <GradiantContext.Provider value={{
      colors,
      prevColors,
      setMainColors,
      setSecondsColors
    }}>
      {children}
    </GradiantContext.Provider>
  )
}