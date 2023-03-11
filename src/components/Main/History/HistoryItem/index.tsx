import React, {FC, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../../../store/hooks';
import { VectorIcon } from '../../../VectorIcon';
import {styles} from './styles';

interface IHistoryItem {
  index: number,
  item: {
    date: string,
    location: string
  },
  onDelete: () => void,
  onLocationPress: () => void
}

export const HistoryItem: FC<IHistoryItem> = ({index,item,onDelete,onLocationPress}) => {

  return (
    <View style={styles.root}>
      <Text style={styles.text}>
        {index + 1}.{' '}
        <TouchableOpacity style={styles.locationBox} onPress={onLocationPress}>
          <Text style={styles.locationText}>{item.location}</Text>
        </TouchableOpacity>{' '}
        {item.date}
      </Text>
      <TouchableOpacity onPress={onDelete} style={styles.deleteBox}><VectorIcon groupName='MaterialIcons' name='highlight-remove' size={20}/></TouchableOpacity>
    </View>
  );
};
