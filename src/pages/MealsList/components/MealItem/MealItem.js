import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './MealItem.style';

const MealItem = ({handleNavigate, meal}) => {
  return (
    <TouchableOpacity
      onPress={() => handleNavigate(meal.idMeal)}
      style={styles.container}>
      <Image style={styles.image} source={{uri: meal.strMealThumb}} />
      <Text style={styles.text}>{meal.strMeal}</Text>
    </TouchableOpacity>
  );
};

export default MealItem;
