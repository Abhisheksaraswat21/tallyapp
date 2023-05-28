import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  Container: {
    height: 200,
    width: 200,
    backgroundColor: "#838383",
    alignItems: "center",
    marginVertical: 5,
  },

  Heading: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  InputScreen: {
    width: "90%",
    borderWidth: 4,
    borderColor: "#525151",
    backgroundColor: "#e3e3e3",
  },

  ButtonLeft: {
    width: 80,
    backgroundColor: "#c1c1c1",
    marginHorizontal: "5%",
    alignItems: "center",
    // borderBottomRightRadius: 100,
  },

  ButtonRight: {
    width: 80,
    backgroundColor: "#c1c1c1",
    marginHorizontal: "5%",
    alignItems: "center",
    // borderTopRightRadius: 100,
  },
  ButtonText: {
    fontSize: 20,
    color: "#575a59",
  },
  CircularButton: {
    position: "absolute",
    top: "40%",
    left: "42%",
    height: 30,
    width: 30,
    borderRadius: 1000,
    backgroundColor: "#c1c1c1",
    alignItems: "center",
    justifyContent: "center",
  },

  ButtonInput: {
    width: 60,
    height: 20,
    marginLeft: 8,
    borderWidth: 1,
  },

  SetButton: {
    height: 20,
    width: 30,
    fontSize: "20px",
    alignItems: "center",
    backgroundColor: "#c1c1c1",
  },
});

export default styles;
