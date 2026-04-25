import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
return (
<View style={styles.container}>
<Text style={styles.title}>PsiSense</Text>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scan')}>
<Text style={styles.buttonText}>Scan QR Code</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('History')}>
<Text style={styles.buttonText}>History</Text>
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'},
title: { fontSize: 32, color: '#acf92c', marginBottom: 40 },
button: { backgroundColor: '#161616', padding: 20, borderRadius: 12, marginVertical: 10, width: '70%' },
buttonText: { color: '#fff', textAlign: 'center', fontSize: 18 }
});