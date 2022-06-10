import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

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
    green: '#11b777',
  },
  statusBarHeight: getStatusBarHeight(),
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
  shareUrl: 'https://cards.foodstyles.com',
  graphUrl: 'https://api-dev.foodstyles.com/graphql',
};
