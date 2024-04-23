import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthNavigation from './authNavigation';
import MainSideDrawer from './drawer';

const MainStack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={'auth'}
            >
                <MainStack.Screen
                    name={'auth'}
                    component={AuthNavigation}
                />
                <MainStack.Screen
                    name={'app'}
                    component={MainSideDrawer}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

