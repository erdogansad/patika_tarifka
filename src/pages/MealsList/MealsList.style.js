import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loading_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffa500',
  },
  loading_text: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    gap: 15,
  },
});
