import { View, Text } from "react-native";

import { styles } from "./styles"

interface StatusProps {
  created: number;
  finished: number;
}

export function Status ({ created, finished }: StatusProps) {
  return(
    <View style={styles.containerStatus}>
      <View style={styles.contentText}>
        <Text style={styles.textInfoCreate}>Criadas</Text>
        <Text style={styles.counter}>{created}</Text>
      </View>

      <View style={styles.contentText}>
        <Text style={styles.textInfoCompleted}>Concluídas</Text>
        <Text style={styles.counter}>{finished}</Text>
      </View>
    </View>
  )
}
