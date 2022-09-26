import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/signinscreen';
import SignUpScreen from '../screens/signupscreen';
import ConfirmEmailScreen from '../screens/confirmemailscreen';
import ForgotPasswordScreen from '../screens/forgotpasswordscreen';
import ResetPasswordScreen from '../screens/resetpasswordscreen';
import Home from '../screens/homescreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
            <Stack.Screen name='CreatePassword' component={ResetPasswordScreen} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation;
