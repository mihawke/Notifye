import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        justifyContent:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
export { styles }