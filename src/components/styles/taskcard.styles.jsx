import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 150,
    backgroundColor: "#afeeee",
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    flexDirection: "row"

  },
  title: {
    color: "#151E3D",
    textAlign: 'center',
    fontSize: "24px",
    fontWeight: 'bold',
    // fontFamily: 'sans-serif',
    marginLeft: 50,
    justifyContent:'center',
    alignSelf:'center',
    // backgroundColor:'red'

  },
  icon: {
    marginLeft: 40,
    marginRight: 40,
    width: 28,
    height: 28,
    borderRadius: 28  ,
    backgroundColor: '#AFEEEE',
    borderWidth: 3,
    borderColor: '#151E3D',
  }
});
export { styles } 