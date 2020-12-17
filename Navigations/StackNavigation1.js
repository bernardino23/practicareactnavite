import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Welcome from '../Screens/Welcome';


const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:false, headerTitle:'Inicio'}}
            />

            <Stack.Screen name="Welcome" component={Welcome}
                options={{headerShown:true, headerTitle:'React Native'}}
            />  
        </Stack.Navigator>

    )
}
