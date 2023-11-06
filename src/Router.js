import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesList from './pages/CategoriesList';
import MealsList from './pages/MealsList';
import MealDetail from './pages/MealDetail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen name="Categories" component={CategoriesList} />
        <Stack.Screen name="Meals" component={MealsList} />
        <Stack.Screen name="Detail" component={MealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
