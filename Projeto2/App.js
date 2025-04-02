import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient'; 

import Login from './screens/login';
import Home from './screens/home';
import Feed from './screens/feed';
import Counter from './screens/counter';

function BottonTabs() {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
        initialRouteName="Home"
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Counter" component={Counter} />
      </Tab.Navigator>
  );

}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="HomeTabs" component = {BottonTabs}/>
      </Stack.Navigator>
    </NavigationContainer>

  )

}