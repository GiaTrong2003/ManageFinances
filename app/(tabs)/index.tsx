import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require("@/assets/images/background-image.png");

const HomeScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri)
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    // view => div
    <View style={styles.container}>
      {/* text => p */}
      {/* image */}
      <View style={styles.imageContainer}>
      <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>

      {/* button */}
      <View style={styles.footerContainer}>
      <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
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
