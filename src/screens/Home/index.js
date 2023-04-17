import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />

        <Title text="Explore Attractions" style={styles.subTitle} />

        <Categories
          selectedCategory="All"
          categories={[
            'All',
            'Popular',
            'Recomended',
            'Most Viewed',
            'Most Visited',
            'Trending',
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
