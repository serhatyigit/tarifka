import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  image: {
    borderRadius: 5,
    width: windowWidth * 0.9,
    height: windowHeight / 4,
  },
  title_container: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#3b3939',
    position: 'absolute',
    bottom: 10,
    width: windowWidth * 0.9,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'right',
    right: 5,
  },
});
