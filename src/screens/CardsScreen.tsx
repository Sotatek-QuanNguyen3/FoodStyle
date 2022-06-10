import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {config} from '../config';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../assets/images';
import {SafeHeaderView} from '../components/SafeHeaderView';
import {RootState, useAppDispatch} from '../store';
import {cardsAction, createCardAction} from '../store/foodThunk';
import {useSelector} from 'react-redux';
import {Card} from '../store/foodSlice';
import CardStyle from '../components/CardStyle';
import {CardOptions} from '../components/CardOptions';

export function CardsScreen() {
  const dispatch = useAppDispatch();
  const cards = useSelector<RootState>(s => s.food.cards) as Card[];

  useEffect(() => {
    dispatch(cardsAction());
  }, [dispatch]);

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
          <SafeHeaderView />
          <Image source={images.logo} style={styles.logo} />
        </LinearGradient>
      </LinearGradient>
    );
  };

  const createCard = async () => {
    try {
      await dispatch(createCardAction('My Food ' + Date.now().toString()));
    } catch (e) {
      Alert.alert('', 'An error occurred. Please try again after some time.');
    }
  };

  const renderFooter = () => (
    <SafeAreaView
      style={[{backgroundColor: config.colors.white}, config.shadow]}>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, config.shadow]}
          onPress={createCard}>
          <Image style={styles.iconAdd} source={images.add} />
          <Text style={styles.textBtn}>New Food Style</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={cards}
        keyExtractor={e => e.id}
        renderItem={({item}) => <CardStyle card={item} />}
      />
      {renderFooter()}
      <CardOptions />
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
  list: {
    paddingBottom: 30,
    paddingTop: 60 + config.statusBarHeight,
  },
});
