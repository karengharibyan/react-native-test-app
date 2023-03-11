import React, {FC, memo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../../store/hooks';
import {styles} from './styles';

interface INotFound {
  onPress: () => void;
}

export const NotFound: FC<INotFound> = memo(({onPress}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>
        Nothing found. Try{' '}
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.cityText}>London</Text>
        </TouchableOpacity>{' '}
        instead
      </Text>
    </View>
  );
});
