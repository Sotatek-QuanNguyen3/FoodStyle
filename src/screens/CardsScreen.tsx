import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {config} from '../config';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../assets/images';
import {SafeHeaderView} from '../components/SafeHeaderView';

export function CardsScreen() {
  const renderHeader = () => {
    return (
      <LinearGradient
        style={styles.header}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={[config.colors.orangish, config.colors.maize]}>
        <LinearGradient
          style={styles.f1}
          colors={['transparent', config.colors.gray + 10, config.colors.gray]}>
          <SafeAreaView>
            <SafeHeaderView />
            <Image source={images.logo} style={styles.logo} />
          </SafeAreaView>
        </LinearGradient>
      </LinearGradient>
    );
  };

  const renderFooter = () => (
    <SafeAreaView
      style={[{backgroundColor: config.colors.white}, config.shadow]}>
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.button, config.shadow]}>
          <Image style={styles.iconAdd} source={images.add} />
          <Text style={styles.textBtn}>New Food Style</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList data={[]} keyExtractor={e => e.id} />
      {renderFooter()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: config.colors.gray,
  },
  header: {
    height: 175,
    backgroundColor: config.colors.orangish,
    position: 'absolute',
    width: '100%',
  },
  f1: {flex: 1},
  logo: {
    marginLeft: 18,
    width: 22,
    height: 26,
    marginTop: 10,
  },
  footer: {
    height: 40,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    height: 50,
    marginTop: -20,
    borderRadius: 6,
    backgroundColor: config.colors.white,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconAdd: {
    width: 40,
    height: 40,
    marginBottom: -4,
  },
  textBtn: {
    fontFamily: config.fontBold,
    color: config.colors.greyishBrown,
    fontSize: 18,
  },
});
