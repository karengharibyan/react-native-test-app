import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../../../store/hooks';
import {styles} from './styles';

interface ICurrentWeather {}

export const CurrentWeather: FC<ICurrentWeather> = ({}) => {
  const {currentWeather} = useAppSelector(state => state.weather);
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>
          Current weather data for {currentWeather?.name}
        </Text>
      </View>
      <View style={styles.detailsBlock}>
        <View style={styles.details}>
          <Text>Temperature: {currentWeather?.main.temp} C</Text>
          <Text>Feels like: {currentWeather?.main.feels_like} C</Text>
          <Text>Pressure: {currentWeather?.main.pressure} kPi</Text>
          <Text>Humidity: {currentWeather?.main.humidity} %</Text>
        </View>
      </View>
    </View>
  );
};
