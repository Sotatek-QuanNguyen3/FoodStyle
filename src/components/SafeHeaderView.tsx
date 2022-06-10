import {View, StatusBar} from 'react-native';
import React from 'react';

export function SafeHeaderView() {
  return <View style={{height: StatusBar.currentHeight || 0}} />;
}
