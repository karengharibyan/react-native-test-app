import React, {FC, useState} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import { History, Search } from '../../components';
import {MainStackParamProps} from '../../navigation/Main';

import {styles} from './styles';

const renderScene = SceneMap({
  search: Search,
  history: History,
});

export const MainScreen: FC<MainStackParamProps<'MainScreen'>> = ({}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'search', title: 'Search'},
    {key: 'history', title: 'History'},
  ]);

  return (
    <View style={styles.root}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};
