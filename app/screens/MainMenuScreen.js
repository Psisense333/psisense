import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function MainMenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Menu</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/SessionBriefingScreen")}
      >
        <Text style={styles.buttonText}>
          Start Remote Viewing Session
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/FAQScreen")}
      >
        <Text style={styles.buttonText}>FAQ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/HowToTrainScreen")}
      >
        <Text style={styles.buttonText}>
          How To Train & Play Psisense
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/OptionsScreen")}
      >
        <Text style={styles.buttonText}>Options</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/SeeingMethodsScreen")}
      >
        <Text style={styles.buttonText}>Seeing Methods</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#acf92c",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#acf92c",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#161616",
  },
});