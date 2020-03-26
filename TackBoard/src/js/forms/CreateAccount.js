import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import t from 'tcomb-form-native';
import createAccountStyle from '../styles/CreateAccountStyle';
import AdvancedButton from '../components/AdvancedButton';
import COPY from '../constants/COPY';

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
    username: t.String,
    password: t.String
});

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
            marginHorizontal: 10,
            marginBottom: 10,
        },
        error: {
            marginHorizontal: 10,
            marginBottom: 10,
        }
    },
    controlLabel: {
        normal: {
            color: 'black',
            fontSize: 18,
            marginBottom: 7,
            marginHorizontal: 10,
            fontWeight: '600'
        },
        error: {
            color: 'red',
            fontSize: 18,
            marginBottom: 7,
            marginHorizontal: 10,
            fontWeight: '600'
        }
    }
}

const options = {
    fields: {
        email: {
            error: 'Email field is required'
        },
        username: {
            error: 'Username field is required'
        },
        password: {
            error: 'password field is required'
        },
    },
    stylesheet: formStyles,
};

let formData = '';

export default function CreateAccount(props) {
    const { setCreateAccount } = props;
    const handleSubmit = () => {
        const value = formData.getValue();

        console.log('value: ', value);
    };

    return (
        <KeyboardAvoidingView behavior={ Platform.OS === 'ios' ? "padding" : "height" } style={ createAccountStyle.container }>
            <Form ref={ data => formData = data } type={ User } options={ options } />
            <AdvancedButton title={ COPY.CREATE_ACCOUNT} onClick={ handleSubmit } style={ createAccountStyle.button } />
            <AdvancedButton title={ COPY.BACK } onClick={ () => setCreateAccount(false) } style={ createAccountStyle.button } />
        </KeyboardAvoidingView>
    )
};