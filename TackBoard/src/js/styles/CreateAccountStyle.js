import { StyleSheet } from 'react-native';

const createAccountStyle = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        flex: 3,
    },
    button: {
        marginHorizontal: 5,
        borderWidth: 3,
        padding: 25,
        borderColor: 'black',
        textAlign: "center",
        fontSize: 20,
    }
});

export default createAccountStyle;