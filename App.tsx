
import { useEffect } from 'react';

import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './src/Navigator'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './src/Redux/store';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider >
  );
};

export default App;
