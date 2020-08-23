import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
import LoginScreen from './screens/LoginScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
  return (
 <View>
   
<AppContainer/>

 </View>
   
  );
  }
}
var AppNavigator=createSwitchNavigator({
  LoginScreen:LoginScreen,
  HomeScreen:HomeScreen,
  ReadScreen:ReadScreen,
  WriteScreen:WriteScreen
})
const AppContainer=createAppContainer(AppNavigator)






