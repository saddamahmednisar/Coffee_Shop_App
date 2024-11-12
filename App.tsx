
import { useEffect } from 'react';

import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './src/Navigator'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
        <MainNavigator/>
    </NavigationContainer>
  );
};

export default App;
