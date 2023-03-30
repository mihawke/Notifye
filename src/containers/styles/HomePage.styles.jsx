import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8DFF7',
        width: '100%',
    },
    footer: {
        justifyContent: 'flex-end',
    },
    header: {
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    float: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#1774FE",
        bottom: 30,
        right: 30,
        alignItems: 'center',
        justifyContent:'center',
    },
    input: {
        position: 'absolute',
        bottom: 100,
        // right: 50,
    }
});

export { styles };