import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  Container: {
    flex: 1,
    marginTop: 100,
    height: "100%",
    marginHorizontal: 5,
  },

  Input: {
    height: 40,

    borderWidth: 1,
    padding: 10,
  },

  HeadingText: {
    // text-[50px] font-bold
    fontSize: 50,
    fontWeight: "600",
  },
  ErrorText: {
    color: "red",
    marginTop: 1,
  },

  LoginButton: {
    padding: 4,
    backgroundColor: "#90EE90",
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
  },
});

export default styles;
