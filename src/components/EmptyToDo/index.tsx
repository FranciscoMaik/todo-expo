import { Text, View, Image } from "react-native";

import { styles } from "./styles"

export function EmptyTodo() {
  return(
    <View style={styles.container}>
      <Image
        source={require("../../assets/clipboard.png")}
      />
      <View style={styles.content}>
        <Text style={styles.strong}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.span}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}
