import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import t from 'tcomb-form-native';
import loginStyle from '../styles/LoginStyle';
import AdvancedButton from '../components/AdvancedButton';
import { setLoggedIn, setLogin, requestAuthUser } from '../redux';
import COPY from '../constants/COPY';
import { connect } from 'react-redux';

const mapDispatchToProps = {
    setLoggedIn,
    setLogin,
    requestAuthUser
};

const Form = t.form.Form;

const User = t.struct({
    email: t.String,
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
        password: {
            error: 'password field is required',
            secureTextEntry: true
        },
    },
    stylesheet: formStyles,
};

let formData = '';

function Login(props) {
    const { setLogin, setLoggedIn, requestAuthUser } = props;
    const [value, setValue] = useState(null);

    const clearForm = () => {
        setValue(null);
    };

    const handleSubmit = () => {
        const value = formData.getValue();
        const { email, password } = value;

        requestAuthUser(email, password)

        if (email === COPY.TEST_EMAIL && password === COPY.TEST_PASSWORD) {
            setLoggedIn(true);
        }

        clearForm();
    };

    return (
        <KeyboardAvoidingView behavior={ "padding" } style={loginStyle.container}>
            <Form
                ref={data => formData = data}
                type={User} options={options}
                value={value}
                onChange={value => setValue(value)}/>
            <AdvancedButton title={COPY.LOG_IN} onClick={handleSubmit} style={loginStyle.button} />
            <AdvancedButton title={'Back'} onClick={ () => setLogin(false) } style={loginStyle.button} />
        </KeyboardAvoidingView>
    )
};

export default connect(null, mapDispatchToProps)(Login);
