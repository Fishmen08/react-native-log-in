import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/FBFlogo.png';
import CustomInput from '../../components/custominputs';
import CustomButton from '../../components/custombutton';
import SocialSignInButtons from '../../components/socialsigninbuttons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPress = () => {
        console.warn('Sign In');

        navigation.navigate('Home');
    }

    const onForgotPasswordPress = () => {
            console.warn('Forgot Password');

           navigation.navigate('ForgotPassword')
    }

    const onSignUpPress = () => {
            console.warn('Sign Up');
            navigation.navigate('SignUpScreen')
    }


return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root} >
    <Image source={Logo} style={[styles.logo, {height: height * 0.2}]} resizeMode='contain'  />
        <CustomInput placeholder='Username' value={username} setValue={setUsername} />
        <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry />
        <CustomButton text='Sign In' onPress={onSignInPress} />

        <CustomButton text='Forgot Password' onPress={onForgotPasswordPress} type='TERTIARY' />

        <SocialSignInButtons />

        <CustomButton
            text="Don't have an account? Create one"
            onPress={onSignUpPress}
            type='TERTIARY'
        />
    </View>
</ScrollView>
)
}

const styles = StyleSheet.create({
    root: {
    alignItems: 'center',
    padding: 20,
    },
    logo: {
    width: '70%',
    maxHeight: 300,
    maxWidth: 300,
    }
})

export default SignInScreen;