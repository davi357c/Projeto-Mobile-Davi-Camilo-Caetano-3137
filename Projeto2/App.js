import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient'; // Importando o LinearGradient

import Login from './screens/login';
import Home from './screens/home';

import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          tabBarStyle: { position: 'absolute', backgroundColor: 'transparent' },
          tabBarBackground: () => (
            <View style={StyleSheet.absoluteFill}>
              <BlurView tint="light" intensity={50} style={StyleSheet.absoluteFill} />
              <LinearGradient
                colors={['#adf', '#fff']}
                style={StyleSheet.absoluteFill}
                start={{ x: 0.5, y: 0 }} 
                end={{ x: 0.5, y: 1 }}   
              />
            </View>
          ),
        }}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'blue',
          labelStyle: {
            fontSize: 30,
          },
        }}
      >
        <Tab.Screen name="Login" component={Login} 
          options={{ 
            tabBarIcon: () => (
              <AntDesign name="login" size={24} color={"black"}/>
            )
          }}
        />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}