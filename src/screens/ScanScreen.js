import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';


export function ScanScreen({ navigation }) {
const [error, setError] = useState('');


const onSuccess = (e) => {
const data = e.data;
try {
const parsed = JSON.parse(data);
navigation.navigate('Report', { report: parsed });
} catch (err) {
setError('Something went wrong! Invalid QR code format.');
}
};


return (
<View style={scanStyles.container}>
<QRCodeScanner onRead={onSuccess} />
{error ? <Text style={scanStyles.error}>{error}</Text> : null}
</View>
);
}


const scanStyles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#000' },
error: { color: 'red', textAlign: 'center', marginTop: 20 }
});