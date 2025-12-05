import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function TargetLoadingScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ViewingStage');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#acf92c" />
      <Text style={styles.text}>Preparing your target...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#161616', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#acf92c', marginTop: 15, fontSize: 16 }
});
