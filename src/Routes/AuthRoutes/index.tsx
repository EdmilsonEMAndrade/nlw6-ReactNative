import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../screen/Home';
import { SingIn } from '../../screen/Signin';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
        headerMode= 'none'
        screenOptions={{
            cardStyle:{
                backgroundColor:'transparent'
            }
        }}>
            <Screen
            name='SingIn'
            component={SingIn}
            />
            <Screen
            name='Home'
            component={Home}
            />
        </Navigator>
    )
}