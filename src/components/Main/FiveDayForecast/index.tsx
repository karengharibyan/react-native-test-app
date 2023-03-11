import React, {FC, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Weather} from '../..';
import {useAppSelector} from '../../../store/hooks';
import {styles} from './styles';

interface IFiveDayForecast {}

export const FiveDayForecast: FC<IFiveDayForecast> = ({}) => {
  const {weathers, currentWeather} = useAppSelector(state => state.weather);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>5 day / 3 hour forecast for {currentWeather?.name}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={weathers?.list}
        renderItem={({item}) => <Weather data={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
