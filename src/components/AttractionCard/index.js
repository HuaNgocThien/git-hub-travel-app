import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const AttractionCard = ({imgSrc, title, subTitle, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imgSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(AttractionCard);
