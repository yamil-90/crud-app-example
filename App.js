import React, {useState} from 'react'
import { StyleSheet, Text, View, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


import Home from './src/screens/Home';
import ClientDetails from './src/screens/ClientDetails';
import NewClient from './src/screens/NewClient';


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createNativeStackNavigator()

// here we define the theme of the app

const theme = {
  ...DefaultTheme,
  // here we can edit the default theme
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774f2'
  }
}
const App = () => {
  

  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: theme.colors.primary
          },
          headerTintColor: theme.colors.surface
        }}
      >
        <Stack.Screen
          component={Home}
          name='home'
          // options={({ navigation, route }) => ({
          //   headerLeft: (props) => <TopBar {...props}
          //     navigation={navigation}
          //     route={route}
          //   />
          //})
          //}
        />
        <Stack.Screen
          component={ClientDetails}
          name='clientDetails'
          options={{
            title: 'Client Details'
          }}
        />
        <Stack.Screen
          component={NewClient}
          name='newClient'
          options={{
            title: 'New Client'
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({})
