import {FlatList, View, Text} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';
import styles from './Meals.styles';

const Meals = ({navigation, route}) => {
  const {categoryName} = route.params;

  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const {data} = useFetch(`${url}${categoryName}`);

  const renderMeal = ({item}) => <MealCard meal={item} />;

  const keyExtractor = item => item.idMeal;
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMeal}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Meals;

// strMeal: "Chicken Alfredo Primavera"
// strMealThumb:'url'
