import { StyleSheet, StatusBar } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    SafeAreaViewstyle: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        paddingHorizontal: 20,
    },
    H1: {
        fontSize: 24,
    },
});