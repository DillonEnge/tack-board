/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
	SafeAreaView,
	View,
	StatusBar,
} from 'react-native';
import appStyle from './styles/AppStyle';
import Landing from './views/Landing';

export default function App() {
	const [ loggedIn, setLoggedIn ] = useState(false);

	return (
		<View style={ appStyle.container }>
			<StatusBar barStyle="dark-content" />
			{ loggedIn ? <Home /> : <Landing setLoggedIn={ setLoggedIn }/> }
		</View>
	);
};
