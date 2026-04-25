import React from "react";
import { View, Text } from "react-native";

export default function MeditationScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#acf92c", fontSize: 28, fontWeight: "bold" }}>
        Meditation Zone
      </Text>
      <Text style={{ color: "#fff", marginTop: 10, fontSize: 16, textAlign: "center", paddingHorizontal: 20 }}>
        Calm your mind. Improve your intuition.
      </Text>
    </View>
  );
}
