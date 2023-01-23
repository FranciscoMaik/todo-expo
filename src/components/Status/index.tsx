import { View, Text } from "react-native";

import { styles } from "./styles"

export function Status () {
  return(
    <View style={styles.containerStatus}>
      <View style={styles.contentText}>
        <Text style={styles.textInfoCreate}>Criadas</Text>
        <Text style={styles.counter}>0</Text>
      </View>

      <View style={styles.contentText}>
        <Text style={styles.textInfoCompleted}>Concluídas</Text>
        <Text style={styles.counter}>0</Text>
      </View>
    </View>
  )
}
