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
  },
  title_container: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffa500',
  },
  list: {
    backgroundColor: '#ffa500',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 15,
    paddingVertical: 10,
  },
});
