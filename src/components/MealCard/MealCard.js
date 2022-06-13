import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './MealCard.styles';

const MealCard = ({meal}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: meal.strMealThumb}} />
      <View style={styles.title_container}>
        <Text style={styles.title}>{meal.strMeal}</Text>
      </View>
    </View>
  );
};

export default MealCard;
