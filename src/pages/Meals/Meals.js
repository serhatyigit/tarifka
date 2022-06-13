import {
  ActivityIndicator,
  FlatList,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';
import styles from './Meals.styles';

const Meals = ({navigation, route}) => {
  const {categoryName} = route.params;

  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const {data, loading, error} = useFetch(`${url}${categoryName}`);

  const onPressMeal = mealName => {
    navigation.navigate('MealDetail', {mealName});
  };

  const renderMeal = ({item}) => <MealCard meal={item} onPress={onPressMeal} />;

  const keyExtractor = item => item.idMeal;

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }
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
