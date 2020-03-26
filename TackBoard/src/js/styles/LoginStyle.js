import { StyleSheet } from 'react-native';

const loginStyle = StyleSheet.create({
    container: {
        justifyContent: "space-evenly",
        flex: 2,
        marginBottom: 5
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

export default loginStyle;