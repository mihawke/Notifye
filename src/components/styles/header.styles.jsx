import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection:'row',
        backgroundColor: '#3F51B5',
        justifyContent: "space-evenly",
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
      },
      title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
      },

})
export {styles}