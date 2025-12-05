import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SessionBriefingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Session Briefing</Text>
      <Text style={styles.text}>
        You will attempt to perceive a hidden target image.
        Stay calm, relax your mind, and do not force anything.
      </Text>
      <Text style={styles.text}>When ready, continue.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TargetLoading')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#161616', padding: 20, justifyContent: 'center' },
  title: { color: '#acf92c', fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  text: { color: '#fff', fontSize: 16, marginBottom: 20 },
  button: { backgroundColor: '#acf92c', padding: 14, borderRadius: 10 },
  buttonText: { textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});
