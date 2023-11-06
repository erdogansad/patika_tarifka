import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './CategoriesList.style';
import useFetch from '../../hooks/useFetch';
import CategoryItem from './components/CategoryItem';

const CategoriesList = ({navigation}) => {
  const {data, isLoading, error} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  const handleNavigate = cat => {
    navigation.navigate('Meals', {category: cat});
  };

  if (isLoading) {
    return (
      <View style={styles.loading_container}>
        <Text style={styles.loading_text}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loading_container}>
        <Text style={styles.loading_text}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={data.categories}
        renderItem={({item}) => (
          <CategoryItem handleNavigate={handleNavigate} category={item} />
        )}
      />
    </View>
  );
};

export default CategoriesList;
