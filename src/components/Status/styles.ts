import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerStatus: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  contentText: {
    flexDirection: "row",
    alignItems: "center"
  },
  textInfoCreate: {
    marginRight: 8,
    fontWeight: "bold",
    color: "#4EA8DE"
  },
  textInfoCompleted: {
    marginRight: 8,
    fontWeight: "bold",
    color: "#8284FA"
  },
  counter: {
    fontWeight: "bold",
    backgroundColor: "#D9D9D9",
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 9999
  }
})
