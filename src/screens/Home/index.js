import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('jsondata :>> ', jsonData);
    setData(jsonData);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />

        <Title text="Explore Attractions" style={styles.subTitle} />

        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            'All',
            'Popular',
            'Recommended',
            'Most Viewed',
            'Most Visited',
            'Trending',
          ]}
        />
        <ScrollView contentContainerStyle={styles.row}>
          {data?.map((item, index) => (
            <AttractionCard
              key={item.id}
              style={index % 2 === 0 ? {marginRight: 16} : {}}
              title={item.name}
              subTitle={item.city}
              imgSrc={item.images?.length ? item.images[0] : null}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
