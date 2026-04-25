import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Psisense</Text>
      <Text style={styles.slogan}>
        Activate Your Innate Psychic Abilities.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/screens/MainMenuScreen")}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#161616",
    justifyContent:"center",
    alignItems:"center",
    padding:20
  },
  title:{
    color:"#acf92c",
    fontSize:40,
    fontWeight:"bold",
    marginBottom:10
  },
  slogan:{
    color:"#fff",
    fontSize:16,
    marginBottom:40,
    textAlign:"center"
  },
  button:{
    backgroundColor:"#acf92c",
    paddingVertical:15,
    paddingHorizontal:40,
    borderRadius:10
  },
  buttonText:{
    color:"#161616",
    fontSize:18,
    fontWeight:"bold"
  }
});