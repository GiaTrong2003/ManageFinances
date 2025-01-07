import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    // view => div
    <View style={styles.container}>
      {/* text => p */}
      <Text style={styles.welcome}>Welcome to the Home Screen!</Text>
      <Link href={"/about"}>Go to about screen</Link>
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
});

export default HomeScreen;
