import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Menu</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StartRemoteViewing')}
      >
        <Text style={styles.buttonText}>Start Remote Viewing Session</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FAQ')}
      >
        <Text style={styles.buttonText}>FAQ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HowToTrain')}
      >
        <Text style={styles.buttonText}>How To Train & Play Psisense</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Options')}
      >
        <Text style={styles.buttonText}>Options</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SeeingMethods')}
      >
        <Text style={styles.buttonText}>Seeing Methods</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#acf92c',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#acf92c',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
