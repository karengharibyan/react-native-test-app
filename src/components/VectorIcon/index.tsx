import React, {FC} from 'react';
import {ViewStyle} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../styles';

const VectorIcons = {
  MaterialIcons,
  EvilIcons,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Zocial,
  Octicons,
  SimpleLineIcons,
  AntDesign,
  Feather,
};

export type iconFamily = keyof typeof VectorIcons;

export interface VectorIconProps {
  groupName: iconFamily;
  name: string;
  size?: number;
  style?: ViewStyle;
  color?: string;
  solid?: boolean;
}

export const VectorIcon: FC<VectorIconProps> = React.memo(
  ({size = 25, ...props}) => {
    let Icon = VectorIcons[props.groupName];
    return (
      <Icon
        name={props.name}
        size={size}
        color={props.color || Colors.black}
        style={props.style}
        solid={props.solid}
      />
    );
  },
);
