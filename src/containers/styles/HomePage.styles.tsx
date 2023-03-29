import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#eaeaea',
        width: '100%',
        // justifyContent:'center',
    },
    footer:{
        justifyContent: 'flex-end',
    },
    header:{
        justifyContent: 'flex-start',
    },
});

export  {styles};