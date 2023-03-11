import React from 'react';
import {AppNavigation} from './navigation';
import {Provider} from 'react-redux';
import {store} from './store';
import {Provider as PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigation />
      </PaperProvider>
    </Provider>
  );
};
