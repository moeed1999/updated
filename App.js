import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../login/components/homepage/HomePage';
import Login from '../login/components/loginscreen/Login';
import Signup from './components/signup/Signup';
import ProfileScreen from './components/profile/ProfileScreen';
import HomeScreen from './components/mainpage/HomeScreen';
// import TestScreen from './components/test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './components/explorescreen/Explore';
// import Navigation from './components/Routing/Navigation';
import Comments from './components/commentpage/comments';
import UserProfile from './components/userprofile/UserProfile';




// import Signup from './components/signup';

export default function App() {
  // const Stack = createNativeStackNavigator(
  // );

  return (
    <View style={styles.container}>
     


    
    
      {/* <Homepage /> */}
      {/* <Login /> */}
      {/* <Signup/> */}
      {/* <ProfileScreen/> */}
      {/* <HomeScreen/> */}
      {/* <Explore/> */}
      {/* <Comments/> */}
      {/* <UserProfile/> */}
      

    


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  

});
