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
  boxSelectorMarked: {
    marginRight: 12,
    borderColor: "#4EA8DE",
    borderWidth: 1,
    height: 18,
    width: 18,
    borderRadius: 99999,
  },
  boxSelectorNoMarked: {
    marginRight: 12,
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
    borderWidth: 1,
    height: 18,
    width: 18,
    borderRadius: 99999,
    alignItems: "center",
    justifyContent: "center",
  },
  actionMarked: {
    width: "80%",
    color: "#F2F2F2"
  },
  actionNoMarked: {
    width: "80%",
    color: "#808080",
    textDecorationStyle: "dashed",
    textDecorationLine: "line-through",
  }
})
