import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
        score="10"
      />
      <ImageDetail
        title="mountains"
        imageSource={require("../../assets/mountain.jpg")}
        score="9"
      />
      <ImageDetail
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
        score="8"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
