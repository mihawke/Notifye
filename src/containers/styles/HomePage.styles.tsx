import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#eaeaea',
        width: '100%',
    },
    bodyContainer:{
        padding: 0,
        backgroundColor: "white",
        width: '100%',
        flex: 1,
    },
    footer:{
        justifyContent: 'flex-end',
    },
    header:{
        justifyContent: 'flex-start',
    },
});

export  {styles};