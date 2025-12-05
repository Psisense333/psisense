import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


export function ReportScreen({ route }) {
const { report } = route.params;


return (
<ScrollView style={reportStyles.container}>
<Text style={reportStyles.header}>Report</Text>
<Text style={reportStyles.json}>{JSON.stringify(report, null, 2)}</Text>
</ScrollView>
);
}


const reportStyles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#000', padding: 20 },
header: { color: '#acf92c', fontSize: 28, marginBottom: 20 },
json: { color: '#fff', fontSize: 16 }
});