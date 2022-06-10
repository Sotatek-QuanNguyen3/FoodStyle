import {View} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const statusBarHeight = getStatusBarHeight();

export function SafeHeaderView() {
  return <View style={{height: statusBarHeight}} />;
}
