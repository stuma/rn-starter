import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Nombre 1", age: 1 },
    { name: "Nombre 2", age: 11 },
    { name: "Nombre 3", age: 12 },
    { name: "Nombre 4", age: 13 },
    { name: "Nombre 5", age: 14 },
    { name: "Nombre 6", age: 15 },
    { name: "Nombre 7", age: 16 },
    { name: "Nombre 8", age: 17 },
    { name: "Nombre 9", age: 18 },
    { name: "Nombre 10", age: 19 },
  ];

  const objeto = {
    name: "oso",
    apellido: "anfetoso",
  };

  const { name, apellido } = objeto;

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item, index }) => {
        return <Text style={styles.textStyle}>Name: {item.name} - Age: {item.age} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
