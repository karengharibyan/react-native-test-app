import React, {FC, useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {
  CurrentWeather,
  FiveDayForecast,
  NotFound,
  VectorIcon,
  Weather,
} from '../..';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {getCurrentWeather} from '../../../store/reducers/weather/weatherSlice';
import {styles} from './styles';

interface ISearch {}

export const Search: FC<ISearch> = ({}) => {
  const dispatch = useAppDispatch();
  const {currentWeather, weathers, error} = useAppSelector(
    state => state.weather,
  );
  const [text, setText] = useState('');

  const onInputChange = (text: string) => {
    setText(text);
  };

  const onSearchPress = () => {
    dispatch(getCurrentWeather(text));
  };

  const onNotFoundPress = useCallback(() => {
    setText('London');
    dispatch(getCurrentWeather('London'));
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.searchRoot}>
        <TextInput
          label="City"
          mode="outlined"
          value={text}
          style={styles.searchInput}
          placeholder="Enter full city name"
          left={<VectorIcon color="red" groupName="Feather" name="search" />}
          onChangeText={onInputChange}
        />
        <Button mode="outlined" onPress={onSearchPress}>
          Search
        </Button>
      </View>
      <View style={styles.results}>
        {error && error?.message.match('404') ? (
          <NotFound onPress={onNotFoundPress} />
        ) : (
          currentWeather && (
            <>
              <View>
                <CurrentWeather />
              </View>
              <View>
                <FiveDayForecast />
              </View>
            </>
          )
        )}
      </View>
    </View>
  );
};
