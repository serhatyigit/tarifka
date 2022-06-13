import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#e4e4da',
  },
  image: {
    width: windowWidth,
    height: windowHeight / 2,
    resizeMode: 'contain',
  },
  header_container: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 25,
    color: '#87171c',
    fontWeight: 'bold',
  },
  area: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#87171c',
  },
  seperator: {
    width: windowWidth,
    backgroundColor: 'gray',
    height: 1,
  },
  instructions: {
    padding: 5,
  },
  ytButton: {
    borderRadius: 10,
    marginVertical: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    width: windowWidth * 0.9,
    height: 40,
  },
  ytText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
