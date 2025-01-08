import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

const HomeScreen = () => {
  return (
    // view => div
    <View style={styles.container}>
      {/* text => p */}
      {/* image */}
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>

      {/* button */}
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
};

// StyleSheet.create => css: is a object includes css properties
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    margin: 10,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

export default HomeScreen;
