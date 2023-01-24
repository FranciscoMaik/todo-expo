import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import { styles } from "./styles"

export function ItemToDo() {
  return(
    <View style={styles.containerItemToDo}>
      <View style={styles.contentTextAndSelector}>
        <View style={styles.boxSelector} />
        <Text style={styles.action}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda</Text>
      </View>
      <Feather name="trash-2" size={24} color="#808080" />
    </View>
  )
}
