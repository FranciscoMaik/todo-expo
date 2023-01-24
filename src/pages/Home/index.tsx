import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';


import { Header } from "../../components/Header";
import { Status } from "../../components/Status";
import { ItemToDo } from "../../components/ItemToDo"

import { styles } from "./styles";

const test = ["test1", "test2", "test3"]

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
          <Ionicons name="add-circle-outline" size={24} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentBody}>
        <Status />

        <FlatList
          data={test}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <ItemToDo />
          )}
        />
      </View>
    </View>
  )
}
