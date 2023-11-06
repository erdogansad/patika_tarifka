import {TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import styles from './CategoryItem.style';

const CategoryItem = ({handleNavigate, category}) => {
  return (
    <TouchableOpacity
      onPress={() => handleNavigate(category.strCategory)}
      style={styles.container}>
      <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
      <Text style={styles.text}>{category.strCategory}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
