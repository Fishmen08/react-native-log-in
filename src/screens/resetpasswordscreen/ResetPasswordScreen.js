import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/custominputs';
import CustomButton from '../../components/custombutton';
import SocialSignInButtons from '../../components/socialsigninbuttons';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPress = () => {
        console.warn('Confirm');
        navigation.navigate('Home')
    }

    const onBackToSignInPress = () => {
            console.warn('Sign In Press');
            navigation.navigate('SignInScreen')
    }


return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root} >
    <Text style={styles.title}>Reset your password</Text>
        <CustomInput placeholder='Code' value={code} setValue={setCode} />
        <CustomInput placeholder='Enter your new password' value={newPassword} setValue={setNewPassword} />

        <CustomButton text='Submit' onPress={onSubmitPress} />

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

export default ResetPasswordScreen;