import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface IWeather {
  data: any
}

export const Weather: FC<IWeather> = memo(({data}) => {
  return (
    <View style={styles.root}>
          <Text style={styles.dateTime}>{data?.dt_txt}</Text>
          <Text>Temperature: {data?.main.temp} C</Text>
          <Text>Feels like: {data?.main.feels_like} C</Text>
          <Text>Pressure: {data?.main.pressure} kPi</Text>
          <Text>Humidity: {data?.main.humidity} %</Text>
    </View>
  );
});
