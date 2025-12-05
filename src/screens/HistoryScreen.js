import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export function HistoryScreen() {
return (
<View style={historyStyles.container}>
<Text style={historyStyles.text}>History will appear here</Text>
</View>
);
}


const historyStyles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
text: { color: '#fff', fontSize: 18 }
});