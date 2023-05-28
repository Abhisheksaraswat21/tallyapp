import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  Container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },

  Button: {
    backgroundColor: "#ff3f3f",
    width: "20%",
    // borderRadius: "2%",
  },
});

export default styles;
