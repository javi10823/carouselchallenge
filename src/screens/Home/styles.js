import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  carouselThumb: {
    width: 200,
    height: 200,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  carouselPoster: {
    width: 200,
    height: 300,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemsFlatList: {
    marginBottom: 8,
  },
  video: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'white',
  },
});

export default styles;
