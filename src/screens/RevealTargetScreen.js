import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RevealTargetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Target Revealed</Text>

      <Image
        source={{ uri: 'https://picsum.photos/400' }}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AccuracyRating')}
      >
        <Text style={styles.buttonText}>Rate Accuracy</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#161616', padding: 20, alignItems: 'center' },
  title: { color: '#acf92c', fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 300, height: 300, borderRadius: 10, marginBottom: 20 },
  button: { backgroundColor: '#acf92c', padding: 14, borderRadius: 10, width: '100%' },
  buttonText: { textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});
