/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
	View,
	StatusBar,
} from 'react-native';
import appStyle from './styles/AppStyle';
import Landing from './views/Landing';
import Home from './views/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
	authLogic: state.authLogicReducer
});

function App(props) {
	const { authLogic } = props;
	const { loggedIn } = authLogic

	return (
		<View style={ appStyle.container }>
			<StatusBar barStyle="dark-content" />
			{ loggedIn ? <Home /> : <Landing /> }
		</View>
	);
};

export default connect(mapStateToProps)(App)
