import { StyleSheet } from 'react-native';

const userAuthStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    buttonContainer: {
        flex: .5,
        justifyContent: "space-evenly"
    },
    button: {
        marginHorizontal: 5,
        borderWidth: 3,
        padding: 25,
        borderColor: 'black',
        textAlign: "center",
        fontSize: 20
    }
});

export default userAuthStyle;