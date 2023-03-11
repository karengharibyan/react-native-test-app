import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Colors} from '../styles';
import {MainStack} from './Main';
import {getCache} from '../utils';
import {useAppDispatch} from '../store/hooks';
import {setHistory} from '../store/reducers/weather/weatherSlice';

const cache = getCache();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.default,
  },
};

export const AppNavigation = () => {
  const dispatch = useAppDispatch();

  const initHistory = async () => {
    const histories = await cache.get('histories');
    if(histories){
      dispatch(setHistory(JSON.parse(histories)));
    }
  };

  useEffect(() => {
    initHistory();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={Theme}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
