import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 90,
    width: Dimensions.get('window').width * 0.98,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  image: {
    height: '100%',
    objectFit: 'scale-down',
    aspectRatio: '1/1',
    overflow: 'hidden',
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
