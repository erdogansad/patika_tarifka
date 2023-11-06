import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative',
    height: 200,
    width: Dimensions.get('window').width * 0.95,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  text: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    paddingHorizontal: 8,
    fontSize: 34,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    fontWeight: 'bold',
  },
});
