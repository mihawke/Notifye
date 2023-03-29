import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 70,
    backgroundColor: "#afeeee",
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    flexDirection: "row",
    margin: 10

  },
  title: {
    color: "#151E3D",
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
    width: 16,
    height: 16,
    borderRadius: 28  ,
    backgroundColor: '#AFEEEE',
    borderWidth: 3,
    borderColor: '#151E3D',
  }
});
export { styles } 