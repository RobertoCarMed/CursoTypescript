import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradiantProvider } from './src/context/GradiantContext';

const AppState = ({ children }: any) => {

  return(
    <GradiantProvider>
      {children}
    </GradiantProvider> 
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen/> */}

      </AppState>
    </NavigationContainer>
  )
}

export default App
