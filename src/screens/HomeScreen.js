import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Comeme los huevos</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Component Demo"
      />
      <Button
      title="Go to List Demo" 
      onPress={() => navigation.navigate("ListScreen")} />
      <Button
      title="Go to Image Screen List" 
      onPress={() => navigation.navigate("ImageScreen")} />
       <Button
      title="Go to Counter Screen"
      onPress={() => navigation.navigate("CounterScreen")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
