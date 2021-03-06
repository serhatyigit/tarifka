import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals';
import MealDetail from './pages/MealDetail';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTitleStyle: {
              color: 'orange',
            },
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{title: 'Meals', headerTintColor: 'orange'}}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}
          options={{title: 'Detail', headerTintColor: 'orange'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
