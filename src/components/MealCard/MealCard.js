import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './MealCard.styles';

const MealCard = ({meal, onPress}) => {
  const {strMeal: mealName, strMealThumb: mealImgUrl} = meal;
  return (
    <TouchableWithoutFeedback onPress={() => onPress(mealName)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: mealImgUrl}} />
        <View style={styles.title_container}>
          <Text style={styles.title}>{mealName}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
