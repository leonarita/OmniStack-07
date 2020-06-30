import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Logo from './components/Logo';
import Title from './components/Title';
import ButtonLink from './components/ButtonLink';

import Feed from './pages/Feed';
import New from './pages/New';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        mode="modal"
        screenOptions={{
          headerTintColor: '#000',
          headerTitleAlign: 'center',
          headerBackTitle: () => null,
          headerTitle: () => <Logo />,
          headerRight: () => <ButtonLink />,
        }}
      >
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen
          name="New"
          component={New}
          options={{
            headerRight: () => null,
            headerTitle: () => <Title>Nova publicação</Title>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
