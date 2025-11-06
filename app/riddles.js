import { View, Text, StyleSheet } from 'react-native';

export default function Riddles() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Riddle screen coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#acf92c',
    fontSize: 22,
  },
});
