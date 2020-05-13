/**
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import App from './src/js/App';
import {name as appName} from './app.json';
import { store } from './src/js/redux';

const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => RNRedux);
