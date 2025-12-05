import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AccuracyRatingScreen({ navigation }) {
  const [rating, setRating] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How Accurate Were You?</Text>

      <View style={styles.row}>
        {[1,2,3,4,5].map(num => (
          <TouchableOpacity
            key={num}
            style={[styles.circle, rating === num && styles.selected]}
            onPress={() => setRating(num)}
          >
            <Text style={styles.circleText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.button, !rating && { opacity: 0.4 }]}
        disabled={!rating}
        onPress={() => navigation.navigate('SessionResult', { rating })}
      >
        <Text style={styles.buttonText}>Submit Rating</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#161616', padding: 20, justifyContent: 'center' },
  title: { color: '#acf92c', fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 },
  circle: {
    width: 55, height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#acf92c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: { backgroundColor: '#acf92c' },
  circleText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  button: { backgroundColor: '#acf92c', padding: 14, borderRadius: 10 },
  buttonText: { textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});
