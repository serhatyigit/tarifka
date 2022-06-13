import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import styles from './Categories.styles';
import CategoryCard from '../../components/CategoryCard';

const Categories = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.API_CATEGORY_URL);

  const onPressCategory = categoryName => {
    navigation.navigate('MealsScreen', {categoryName});
  };

  const renderCategories = ({item}) => (
    <CategoryCard
      category={item}
      onPress={() => onPressCategory(item.strCategory)}
    />
  );

  const keyExtractor = item => item.idCategory;

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
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        style={styles.flatlist}
        data={data.categories}
        renderItem={renderCategories}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default Categories;
