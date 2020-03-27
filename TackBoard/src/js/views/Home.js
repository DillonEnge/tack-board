import React from 'react';
import { View, Text } from 'react-native';
import homeStyle from '../styles/HomeStyle';

export default function Home() {
    return (
        <View style={ homeStyle.container }>
            <Text>[ HOME VIEW HERE ]</Text>
        </View>
    );
};