import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
//screens
import HomeScreen from './screens/HomeScreen';
import DressesScreen from './screens/DressesScreen';
const Drawer = createDrawerNavigator();

const App= () =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name ="Dresses" component={DressesScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;