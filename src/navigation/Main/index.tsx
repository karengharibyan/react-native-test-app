import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {MainScreen} from '../../screens';

export type MainStackParamList = {
  MainScreen: undefined
};

export type MainStackParamProps<
  T extends keyof MainStackParamList,
> = NativeStackScreenProps<MainStackParamList, T>;

export type MainScreenNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
      />
    </Stack.Navigator>
  );
};
