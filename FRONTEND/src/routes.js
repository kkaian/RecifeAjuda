import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Home} from './pages/home'
import {Profile} from './pages/profile'
import {Recicoins} from './pages/recicoins'
import {TelaLogin} from './pages/login';
import {Projects} from './pages/Projects'
import {Info} from './pages/info'
import { Entypo, Ionicons, FontAwesome6 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
var Route = false;

export function Routes() {

  
  if(Route){
    return (
      
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle:{
        borderTopWidth: 0,
        height: '8%',
        paddingBottom: 5,
        paddingTop: 5,
      
        backgroundColor: '#2B90C7',
        //borderRadius: 30,
        //marginBottom: 10,
        //marginLeft: 8,
        //marginRight: 8,
     
        
      },
      
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#fff',
      tabBarShowLabel: false,
      
       }}
    
    
    initialRouteName="Home">
      
        <Tab.Screen name="Ajuda" component={Info}
         options={{
          
          tabBarIcon: ({size, color, focused}) => (
            <View style={[styles.circle, {backgroundColor: focused ? '#359BDD' : 'transparent', marginBottom: focused ? 30 : 0}]}>
            <Entypo  name='help-with-circle' size={focused ? size + 15 : size + 7} color={color} />
            </View>
          ), 
          
          headerShown:false,
      
        }}
        />
        
        <Tab.Screen name="Projects" component={Projects}
         options={{
         
          tabBarIcon: ({size, color, focused}) => (
            <View style={[styles.circle, {backgroundColor: focused ? '#359BDD' : 'transparent', marginBottom: focused ? 30 : 0}]}>
              <Ionicons name='file-tray-full-sharp' size={focused ? size + 17 : size + 7} color={color} />
              </View>
            ), 
          
            headerShown:false,
      }}
        />
      <Tab.Screen name="Home"
       component={Home}
        options={{
         
          tabBarIcon: ({size, color, focused}) => (
            <View style={[styles.circle, {backgroundColor: focused ? '#359BDD' : 'transparent', marginBottom: focused ? 30 : 0}]}>
            <Entypo name='home' size={focused ? size + 19 : size + 10} color={color} />
            </View>
          ), 
            headerShown:false,
        }}
      />
      <Tab.Screen name="Recicoins" component={Recicoins}
         options={{
         
          tabBarIcon: ({size, color, focused}) => (
            <View style={[styles.circle, {backgroundColor: focused ? '#359BDD' : 'transparent', marginBottom: focused ? 30 : 0}]}>
            <FontAwesome6 name='coins' size={focused ? size + 14 : size + 7} color={color} />
            </View>
          ), 
          headerShown:false,
      }}     
      />
      <Tab.Screen name="Perfil" component={Profile}
       options={{
       
        tabBarIcon: ({size, color, focused}) => (
          <View style={[styles.circle, {backgroundColor: focused ? '#359BDD' : 'transparent', marginBottom: focused ? 30 : 0}]}>
          <Ionicons name='person' size={focused ? size + 15 : size + 7} color={color} />
          </View>
        ), 
        headerShown:false,
    }}
      />
    </Tab.Navigator>
    
  );}else{
    Route = true;
    return(<TelaLogin/>);}
}

const styles = StyleSheet.create({
  circle: {
    width: 75,
    height: 75,
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
  },});