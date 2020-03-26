import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function AdvancedButton(props) {
    const { onClick, title, style } = props;

    return (
        <TouchableOpacity onPressOut={ onClick }>
            <Text style={ style }>
                { title }
            </Text>
        </TouchableOpacity>
    )
};
