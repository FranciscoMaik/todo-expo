import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';


import { Header } from "../../components/Header";
import { Status } from "../../components/Status";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />


      <View style={styles.contentInput}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonAdd}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentBody}>
        <Status />
      </View>
    </View>
  )
}
