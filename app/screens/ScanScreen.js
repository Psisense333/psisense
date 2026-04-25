import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ScanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan feature disabled</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#acf92c",
    fontSize: 18
  }
});