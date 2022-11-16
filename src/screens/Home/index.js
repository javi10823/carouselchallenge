import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Title} from 'react-native-paper';
import {useLazyGetDataQuery} from '../../services/home';
import Video from 'react-native-video';
import styles from './styles';

const Home = () => {
  const [video, setVideo] = useState('');
  const [fetch, {data, isLoading}] = useLazyGetDataQuery();

  useEffect(() => {
    fetch();
  }, [fetch]);

  const onPressItem = videoUrl => {
    if (videoUrl) {
      return setVideo(videoUrl);
    }
    Alert.alert(
      'Video not available',
      "This item doesn't have a video available",
    );
  };

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
                  style={styles.itemsFlatList}
                  renderItem={({item: item2}) => (
                    <TouchableOpacity
                      onPress={() => onPressItem(item2.videoUrl)}
                      style={styles.itemContainer}>
                      <Image
                        source={{uri: item2.imageUrl}}
                        style={
                          item.type === 'thumb'
                            ? styles.carouselThumb
                            : styles.carouselPoster
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
                    </TouchableOpacity>
                  )}
                  data={item.items}
                  snapToOffsets={item.items.map(
                    (_i, index) => 130 + 208 * index,
                  )}
                  horizontal
                  pagingEnabled
                />
              </>
            )}
            data={data}
          />
        )}
      </View>
      {video && (
        <>
          <Video
            onEnd={() => setVideo('')}
            source={{uri: video}}
            resizeMode="contain"
            style={styles.video}
          />
          <Title style={styles.closeButton} onPress={() => setVideo(null)}>
            X
          </Title>
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
