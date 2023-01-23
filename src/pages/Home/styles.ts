import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#272727",
    flex: 1,
  },
  contentInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -32
  },
  input: {
    backgroundColor: "#262626",
    borderColor: "#0D0D0D",
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
    width: 271,
    marginRight: 4,
    fontSize: 16
  },
  buttonAdd: {
    backgroundColor: "#1E6F9F",
    padding: 16,
    borderRadius: 6,
  },
  contentBody: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
  }
})
