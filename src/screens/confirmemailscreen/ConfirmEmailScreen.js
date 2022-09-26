import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/custominputs';
import CustomButton from '../../components/custombutton';
import SocialSignInButtons from '../../components/socialsigninbuttons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPress = () => {
        console.warn('Confirm');
        navigation.navigate('Home')
    }

    const onResendPress = () => {
            console.warn('Resend');
    }

    const onBackToSignInPress = () => {
            console.warn('Sign In Press');
            navigation.navigate('SignInScreen')
    }


return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root} >
    <Text style={styles.title}>Confirm your email</Text>
        <CustomInput placeholder='Enter your confirmation code' value={code} setValue={setCode} />

        <CustomButton text='Confirm' onPress={onConfirmPress} />

        <CustomButton
            text="Resend code"
            onPress={onResendPress}
            type='SECONDARY'
        />

        <CustomButton
                    text="Back to Sign In"
                    onPress={onBackToSignInPress}
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

export default ConfirmEmailScreen;