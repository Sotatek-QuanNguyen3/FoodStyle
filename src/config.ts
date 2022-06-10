import {Platform} from 'react-native';

export const config = {
  fontRegular: Platform.select({
    ios: 'ProximaNova-Regular',
    android: 'ProximaNovaAlt-Regular',
  }),
  fontBold: Platform.select({
    ios: 'ProximaNova-Bold',
    android: 'ProximaNovaAlt-Bold',
  }),
  colors: {
    orangish: '#fa7745',
    maize: '#f3c442',
    gray: '#f8f8f8',
    white: '#ffffff',
    greyishBrown: '#434343',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
};
