import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/custominputs';
import CustomButton from '../../components/custombutton';
import SocialSignInButtons from '../../components/socialsigninbuttons'
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const onRegisterPress = () => {
        console.warn('Register');
        navigation.navigate('ConfirmEmail');
    }

    const onTermsOfUsePress = () => {
            console.warn('Terms of Use');
    }

    const onPrivacyPolicyPress = () => {
            console.warn('Privacy');
    }



    const onSignInPress = () => {
            console.warn('Sign In Press');
            navigation.navigate('SignInScreen');
    }


return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root} >
    <Text style={styles.title}>Create an account</Text>
        <CustomInput placeholder='Username' value={username} setValue={setUsername} />
        <CustomInput placeholder='Email' value={email} setValue={setEmail} />
        <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry />
        <CustomInput placeholder='Confirm Password' value={confirmPassword} setValue={setConfirmPassword} secureTextEntry />
        <CustomButton text='Register' onPress={onRegisterPress} />

        <Text style={styles.text}>
        By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePress}>Terms of Use</Text> and {' '}
        <Text style={styles.link} onPress={onPrivacyPolicyPress}>Privacy Policy</Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
            text="Have an account? Sign In"
            onPress={onSignInPress}
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
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
    },
    text: {
    color: 'gray',
    marginVertical: 10,
    },
    link: {
    color: '#fdb075',
    }
})

export default SignUpScreen;