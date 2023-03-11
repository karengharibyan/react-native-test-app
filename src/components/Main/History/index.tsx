import React, {FC, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import { ISearchHistoryItem } from '../../../store/reducers/weather/entities';
import { removeHistory, setCurrentWeather, setWeathers } from '../../../store/reducers/weather/weatherSlice';
import { HistoryItem } from './HistoryItem';
import {styles} from './styles';

interface IHistory {
  jumpTo: (key: string) => void
}

export const History: FC<IHistory> = ({jumpTo}) => {
  const {history} = useAppSelector(state => state.weather);
  const dispatch = useAppDispatch()

  const onItemDelete = (index: number) => {
    dispatch(removeHistory(index))
  }

  const onLocationPress = (item: ISearchHistoryItem) => {
    dispatch(setCurrentWeather(item.currentWeather))
    dispatch(setWeathers(item.weathers))
    jumpTo('search')
  }

  return (
    <View style={styles.root}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={history}
        renderItem={({item, index}) => (
          <HistoryItem item={item} index={index} onDelete={() => onItemDelete(index)} onLocationPress={() => onLocationPress(item)}/>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
