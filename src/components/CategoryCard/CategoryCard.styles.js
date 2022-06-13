import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#c8cfc5',
    borderRadius: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  image: {
    marginLeft: 20,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  text_container: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
