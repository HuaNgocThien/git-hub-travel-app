import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const AttractionDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AttractionDetails</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
