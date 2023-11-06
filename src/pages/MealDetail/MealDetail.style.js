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
  image: {
    height: 300,
    resizeMode: 'cover',
  },
  title_container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#a52a2a',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#a52a2a',
  },
  description: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'black',
    fontSize: 16,
  },
  youtube_button: {
    backgroundColor: '#f44336',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  youtube_button_text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
