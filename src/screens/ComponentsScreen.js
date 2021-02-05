import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import myStyles from './Styles'

const ComponentsScreen = () => {
  const variable = <Text style={myStyles.otroEstiloMas}>Comeme los huevos</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text style={styles.otroStyle}>Hola</Text>
      {variable}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
      fontSize: 45
  },
  otroStyle:{
      fontSize: 55
  }
});

export default ComponentsScreen;
