import React, { useState, useEffect } from 'react';
import landingStyle from '../styles/LandingStyle';
import { Image, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import UserAuth from '../ui/UserAuth';
import Login from '../forms/Login';
import CreateAccount from '../forms/CreateAccount';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
	authLogic: state.authLogicReducer
});

function Landing(props) {
    const { authLogic } = props;
    const {
        login,
        createAccount
    } = authLogic;
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', () => {
            setKeyboardVisible(true); // or some other action
        });

        const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardVisible(false); // or some other action
        });

        return () => {
            keyboardWillHideListener.remove();
            keyboardWillShowListener.remove();
        };
    }, []);

    const renderUserAuth = () => {
        if (createAccount) {
            return <CreateAccount/>;
        }
        else if (login) {
            return <Login />;
        }

        return <UserAuth />;
    };

    return (
        <View style={ landingStyle.container }>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={landingStyle.innerContainer}>
                    <View style={ landingStyle.imageContainer }>
                        { !isKeyboardVisible && <Image style={ landingStyle.calendar } source={ require('../../images/png/calendar.png') } /> }
                    </View>
                    { renderUserAuth() }
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default connect(mapStateToProps)(Landing);
