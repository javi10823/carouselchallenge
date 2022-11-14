import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Title} from 'react-native-paper';
import {useGetDataQuery} from '../../services/home';
import styles from './styles';

const Home = () => {
  const {data, isLoading} = useGetDataQuery();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title>Home page</Title>
        {!isLoading && (
          <FlatList
            renderItem={() => <View style={styles.carouselItem} />}
            data={[0, 1, 2, 3, 4, 5]}
            snapToOffsets={[150, 350, 550, 750, 950]}
            horizontal
            pagingEnabled
          />
        )}
        <View style={{height: 8}} />
        {!isLoading && (
          <FlatList
            renderItem={() => <View style={styles.carouselItem2} />}
            data={[0, 1, 2, 3, 4, 5]}
            snapToOffsets={[150, 350, 550, 750, 950]}
            horizontal
            pagingEnabled
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
