import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';
import AnotherScreen from '../Screens/AnotherScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import TopTapNavigator1 from './TopTapNavigator1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="Settings"
            tabBarOptions={{
                activeTintColor:"#122be3",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                 name="  "
                component={HomeScreen}
                options={{
                    
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
                   <Tab.Screen
                name=" "
                component={SettingsScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"logo-youtube"} size={20} color={color}/>
                    )
                }}
            />
                   <Tab.Screen
                name="    "
                component={AnotherScreen}
                options={{
                   
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-mail"} size={20} color={color}/>
                    )
                }}
            />
                   <Tab.Screen
                name="     "
                component={DetailsScreen}
                options={{
                
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-contact"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="      "
                component={TopTapNavigator1}
                options={{
            
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}