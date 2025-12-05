import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ViewingStageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viewing Stage</Text>
      <Text style={styles.text}>
        Close your eyes. Allow impressions, shapes, colors, and feelings to emerge naturally.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RevealTarget')}
      >
        <Text style={styles.buttonText}>Reveal Target</Text>
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
