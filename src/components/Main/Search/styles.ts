import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    root: {
        padding: 16,
    },
    searchRoot: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchInput: {width: '70%'},
    results: {
        marginTop: 16,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})