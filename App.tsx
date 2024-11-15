import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './src/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/Redux/store';
import Toast from 'react-native-toast-message'; 

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
        <Toast /> 
      </PersistGate>
    </Provider>
  );
};

export default App;
