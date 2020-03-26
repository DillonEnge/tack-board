import React from 'react';
import { View } from 'react-native';
import COPY from '../constants/COPY';
import userAuthStyle from '../styles/UserAuthStyle';
import AdvancedButton from '../components/AdvancedButton';

export default function UserAuth(props) {
    const { setLogin, setCreateAccount } = props;

    return (
        <View style={ userAuthStyle.container }>
            <View style={ userAuthStyle.buttonContainer }>
                <AdvancedButton title={ COPY.LOG_IN } onClick={ () => setLogin(true) } style={ userAuthStyle.button } />
                <AdvancedButton title={ COPY.CREATE_ACCOUNT } onClick={ () => setCreateAccount(true) } style={ userAuthStyle.button } />
            </View>
        </View>
    )
};