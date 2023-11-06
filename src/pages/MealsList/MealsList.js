import {View, Text, FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './MealsList.style';
import MealItem from './components/MealItem';

const MealsList = ({route, navigation}) => {
  const {category} = route.params;
  const {data, isLoading, error} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  );

  const handleNavigate = mealId => {
    navigation.navigate('Detail', {mealId});
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
        data={data.meals}
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => (
          <MealItem handleNavigate={handleNavigate} meal={item} />
        )}
      />
    </View>
  );
};

export default MealsList;
