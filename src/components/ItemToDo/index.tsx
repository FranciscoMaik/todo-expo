import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

import { ItemsToDoProps } from "../../types/ItemsToDo"

import { styles } from "./styles"

interface ItemToDoComponentProps extends ItemsToDoProps {
  onRemoveToDo: (id: string) => void;
  onMarkedToDo: (id: string) => void;
}

export function ItemToDo({
    id,
    itemToDo,
    marked,
    onRemoveToDo,
    onMarkedToDo
  }: ItemToDoComponentProps
  ) {
  return(
    <View style={styles.containerItemToDo}>
      <View style={styles.contentTextAndSelector}>
        <TouchableOpacity onPress={() => onMarkedToDo(id)}>
          <View style={!marked ? styles.boxSelectorMarked : styles.boxSelectorNoMarked} >
            {marked && <Feather name="check" size={12} color="#F2F2F2" />}
          </View>
        </TouchableOpacity>
        <Text style={!marked ? styles.actionMarked : styles.actionNoMarked}>{itemToDo}</Text>
      </View>

      <Feather
        name="trash-2"
        size={24}
        color="#808080"
        onPress={() => onRemoveToDo(id)}
      />
    </View>
  )
}
