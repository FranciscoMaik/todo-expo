import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { v4 as uuidV4 } from "uuid"


import { Header } from "../../components/Header";
import { Status } from "../../components/Status";
import { ItemToDo } from "../../components/ItemToDo"
import { EmptyTodo } from "../../components/EmptyToDo";

import { ItemsToDoProps } from "../../types/ItemsToDo"

import { styles } from "./styles";


export function Home() {
  const [itemsToDo, setItemsToDo] = useState<Array<ItemsToDoProps>>([]);
  const [inputData, setInputData] = useState("");

  function handleAddItem() {
    if(inputData === "") {
      return Alert.alert("ToDo", "Não é possível adicionar um item vazio! Por favor preencher o ToDo.");
    }

    const objectToAdd: ItemsToDoProps = {
      itemToDo: inputData,
      marked: false,
      id: uuidV4()
    }

    setItemsToDo(prev => [...prev, objectToAdd])
    setInputData("");
  }

  function handleRemoveItem(id: string){
    const findExistItem = itemsToDo.find((elem) => elem.id === id);

    if(findExistItem) {
      setItemsToDo(prev => {
        const removeItem = prev.filter((elem) => elem.id !== id);
        return removeItem;
      });
    }else {
      Alert.alert("ToDo", "Não é possível remover o ToDo selecionado.");
    }
  }

  function handleMarkedItem(id: string){
    const findExistItem = itemsToDo.find((elem) => elem.id === id);

    if(findExistItem) {
      setItemsToDo(prev => {
        const markedItem = prev.map((elem) => {
          if(elem.id === id) {
            return {...elem, marked: !elem.marked}
          }
          return elem;
        });
        return markedItem;
      });
    }else {
      Alert.alert("ToDo", "Não é possível marcar o ToDo selecionado.");
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contentInput}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          style={styles.input}
          value={inputData}
          onChangeText={(text) => setInputData(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddItem}>
          <Ionicons name="add-circle-outline" size={24} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentBody}>
        <Status
          created={itemsToDo.length}
          finished={itemsToDo.filter((elem) => elem.marked).length}
        />

        <FlatList
          data={itemsToDo}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemToDo
              id={item.id}
              itemToDo={item.itemToDo}
              marked={item.marked}
              onRemoveToDo={handleRemoveItem}
              onMarkedToDo={handleMarkedItem}
            />
          )}
          ListEmptyComponent={<EmptyTodo />}
        />
      </View>
    </View>
  )
}
