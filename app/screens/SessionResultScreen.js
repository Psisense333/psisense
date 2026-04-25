import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SessionResultScreen({ route, navigation }) {
  const { rating } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Session Complete</Text>

      <Text style={styles.text}>Your accuracy rating:</Text>
      <Text style={styles.score}>{rating} / 5</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Return Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#161616', justifyContent: 'center', padding: 20 },
  title: { color: '#acf92c', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  text: { color: '#fff', fontSize: 16 },
  score: { color: '#acf92c', fontSize: 50, fontWeight: 'bold', marginVertical: 30 },
  button: { backgroundColor: '#acf92c', padding: 14, borderRadius: 10 },
  buttonText: { textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});
