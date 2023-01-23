import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';


export function ItemToDo() {
  return(
    <View>
      <View>
        <Text>O</Text>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda</Text>
      </View>
      <Feather name="trash-2" size={24} color="black" />
    </View>
  )
}
