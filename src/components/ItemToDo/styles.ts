import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerItemToDo: {
    backgroundColor: "#262626",
    borderRadius: 8,
    marginBottom: 8,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  contentTextAndSelector: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxSelector: {
    marginRight: 12,
    borderColor: "#4EA8DE",
    borderWidth: 1,
    height: 18,
    width: 18,
    borderRadius: 99999,
  },
  action: {
    width: "80%",
    color: "#F2F2F2"
  }
})
