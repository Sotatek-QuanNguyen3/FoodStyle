import {View, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {loginAction} from '../store/foodThunk';
import {useAppDispatch} from '../store';
import {config} from '../config';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '.';

export function SplashScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const login = useCallback(async () => {
    try {
      await dispatch(loginAction()).unwrap();
      navigation.navigate('CardsScreen');
    } catch (e) {
      Alert.alert('', 'An error occurred. Please try again after some time.', [
        {text: 'OK', onPress: login},
      ]);
    }
  }, [dispatch, navigation]);

  useEffect(() => {
    login();
  }, [login]);

  return (
    <View style={styles.container}>
      <ActivityIndicator color={config.colors.orangish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
