import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/custominputs';
import CustomButton from '../../components/custombutton';
import SocialSignInButtons from '../../components/socialsigninbuttons';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPress = () => {
        console.warn('Confirm');
        navigation.navigate('CreatePassword')
    }

    const onBackToSignInPress = () => {
            console.warn('Sign In Press');
            navigation.navigate('SignInScreen')
    }


return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root} >
    <Text style={styles.title}>Reset your password</Text>
        <CustomInput placeholder='Username' value={username} setValue={setUsername} />

        <CustomButton text='Send' onPress={onSendPress} />

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

export default ForgotPasswordScreen;