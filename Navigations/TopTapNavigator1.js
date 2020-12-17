import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';
import AboutScreen from '../Screens/AboutScreen';
import AboutScreen2 from '../Screens/AboutScreen2';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab =  createMaterialTopTabNavigator();

export default function TopTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Settings"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showIcon:true,
                showLabel:true,
                labelStyle:{
                    fontSize:11
                },
                style:{
                    paddingTop:Constants.statusBarHeight,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
            <Tab.Screen
                name=" "
                component={AboutScreen}
                options={{
                    tabBarLabel:"ACERCA 1",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-github"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="  "
                component={AboutScreen2}
                options={{
                    tabBarLabel:"ACERCA 2",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-github"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}