import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../custombutton';

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
            console.warn('Facebook');
    }

    const onSignInGoogle = () => {
            console.warn('Google');
    }

    const onSignInApple = () => {
            console.warn('Apple');
    }

return (
    <>
        <CustomButton
                    text='Sign In with Facebook'
                    onPress={onSignInFacebook}
                    bgColor='#e7eaf4'
                    fgColor='#4765A9'
        />
                <CustomButton
                    text='Sign In with Google'
                    onPress={onSignInGoogle}
                    bgColor='#fae9ea'
                    fgColor='#dd4d44'
                />
                <CustomButton
                    text='Sign In Apple'
                    onPress={onSignInApple}
                    bgColor='#e3e3e3'
                    fgColor='#363636'

                />
    </>
)
}

export default SocialSignInButtons;