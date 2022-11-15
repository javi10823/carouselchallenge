import React from 'react';
import {FlatList, SafeAreaView, View, Image} from 'react-native';
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
            renderItem={({item}) => (
              <>
                <Title>{item.title}</Title>
                <FlatList
                  renderItem={({item: item2}) => (
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                      }}>
                      <Image
                        source={{uri: item2.imageUrl}}
                        style={
                          item.type === 'thumb'
                            ? styles.carouselItem
                            : styles.carouselItem2
                        }
                      />
                      <Title
                        style={{
                          position:
                            item.type === 'thumb' ? 'absolute' : 'relative',
                          bottom: 0,
                        }}>
                        {item2.title}
                      </Title>
                    </View>
                  )}
                  data={item.items}
                  snapToOffsets={item.items.map(
                    (_i, index) => 130 + 208 * index,
                  )}
                  horizontal
                  pagingEnabled
                />
                <View style={{height: 8}} />
              </>
            )}
            data={data}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
