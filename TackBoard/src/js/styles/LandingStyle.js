import { StyleSheet } from 'react-native';

const landingStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F9F9",
        justifyContent: "space-evenly"
    },
    innerContainer: {
        flex: 1,
        justifyContent: "flex-start"
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
	calendar: {
        width: 155,
        height: 170
    },
});

export default landingStyle;