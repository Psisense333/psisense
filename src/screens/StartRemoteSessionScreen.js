// src/screens/StartRemoteSessionScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StartRemoteSessionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a Remote Viewing Session</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SessionBriefing")}
      >
        <Text style={styles.buttonText}>Begin Session</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',   // black background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#acf92c',         // neon green
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#acf92c',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
