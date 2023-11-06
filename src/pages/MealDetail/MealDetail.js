import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './MealDetail.style';

const MealDetail = ({route}) => {
  const {mealId} = route.params;
  const {data, isLoading, error} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
  );

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

  const handleUrl = url => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: data.meals[0].strMealThumb}} />
      <View style={styles.title_container}>
        <Text style={styles.title}>{data.meals[0].strMeal}</Text>
        <Text style={styles.subtitle}>{data.meals[0].strArea}</Text>
      </View>
      <Text style={styles.description}>{data.meals[0].strInstructions}</Text>
      <TouchableOpacity
        onPress={() => handleUrl(data.meals[0].strYoutube)}
        style={styles.youtube_button}>
        <Text style={styles.youtube_button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MealDetail;
