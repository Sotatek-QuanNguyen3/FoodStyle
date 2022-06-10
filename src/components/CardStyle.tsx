import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Card} from '../store/foodSlice';
import {config} from '../config';
import {images} from '../assets/images';
import {showCardAction} from '../store/foodThunk';
import {useAppDispatch} from '../store';

interface CardStyleProps {
  card: Card;
  onPress?: () => void;
  image?: ImageSourcePropType;
}

export default function CardStyle({card, onPress, image}: CardStyleProps) {
  const local = useRef<{view: View | null; py: number}>({
    view: null,
    py: 0,
  }).current;
  const dispatch = useAppDispatch();

  useEffect(() => {
    local.view?.measure((fx, fy, w, h, px, py) => {
      local.py = py;
    });
  }, [local]);

  const showOptions = () => {
    dispatch(showCardAction({card, py: local.py}));
  };

  return (
    <TouchableOpacity
      onPress={onPress || showOptions}
      ref={e => (local.view = e)}
      style={[styles.container, config.shadow]}
      onLayout={event => {
        const layout = event.nativeEvent.layout;
        console.log('height:', layout.height);
        console.log('width:', layout.width);
        console.log('x:', layout.x);
        console.log('y:', layout.y);
      }}>
      <Text style={styles.name}>{card.name}</Text>
      <Image source={image || images.options} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: config.colors.white,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 6,
    flexDirection: 'row',
  },
  name: {
    fontFamily: config.fontBold,
    flex: 1,
    fontSize: 18,
    color: config.colors.greyishBrown,
  },
});
