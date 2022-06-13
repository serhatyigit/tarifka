import {ActivityIndicator, View, SafeAreaView, Text} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import MealDetailCard from '../../components/MealDetailCard';

const MealDetail = ({route}) => {
  const {mealName} = route.params;

  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const {data, loading, error} = useFetch(`${url}${mealName}`);

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
    <View>
      <MealDetailCard meal={data.meals} />
    </View>
  );
};

export default MealDetail;
