import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        justifyContent: 'center'
    },
    locationText: {
        fontSize: 18,
        color: 'blue',
        textDecorationLine: 'underline'
    },
    locationBox: {
        alignItems: 'center'
    },
    deleteBox: {
        marginLeft: 10
    }
})