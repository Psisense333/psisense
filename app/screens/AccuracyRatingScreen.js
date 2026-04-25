import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AccuracyRatingScreen() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(75); // example value
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accuracy Rating</Text>

      <Text style={styles.score}>{score}%</Text>

      <Text style={styles.description}>
        Evaluating perceptual alignment...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#acf92c",
    fontSize: 26,
    marginBottom: 20
  },
  score: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 10
  },
  description: {
    color: "#aaa",
    fontSize: 14
  }
});