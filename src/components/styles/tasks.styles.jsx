import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding: 0,
        backgroundColor: "white",
        alignItems:'center',
        paddingTop: 10
    },
    button:{
        backgroundColor:'red',
        // height: 50,
        width:150
    },
    textInput:{
        backgroundColor:"gray",
        width:250,
        borderRadius:5,
        paddingLeft:5,
        paddingRight:5
    },
    input:{
        flexDirection:'column',
        padding:10,
        // backgroundColor:'blue',
        gap:10,
        borderRadius: 10,
        alignItems:'center'
    }
});

export  {styles};