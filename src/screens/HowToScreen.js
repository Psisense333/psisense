import React from "react";
import { View, Text } from "react-native";

export default function HowToScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#acf92c", fontSize: 28, fontWeight: "bold" }}>
        How To Use Psisense
      </Text>
      <Text style={{ color: "#fff", marginTop: 10, fontSize: 16, paddingHorizontal: 20, textAlign: "center" }}>
        Learn how to train your psychic abilities step-by-step.
      </Text>
    </View>
  );
}
