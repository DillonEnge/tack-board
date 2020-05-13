import { Alert } from "react-native";

export const createGenericAlert = (title, msg) => {
    Alert.alert(
        title,
        msg,
        [
            { text: "OK", onPress: () => {} }
        ],
        { cancelable: false }
    );
};