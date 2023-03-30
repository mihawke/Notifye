import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    flexDirection: "row",
    margin: 10

  },
  title: {
    color: "#505873",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    // fontFamily: 'sans-serif',
    marginLeft: 20,
    justifyContent:'center',
    alignSelf:'center',
    // backgroundColor:'red'

  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 28  ,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4988E4',
  }
});
export { styles } 