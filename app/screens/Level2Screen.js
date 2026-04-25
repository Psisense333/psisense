import React from "react";
import { View, Text } from "react-native";

export default function Level2Screen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#acf92c", fontSize: 28, fontWeight: "bold" }}>
        Level 2
      </Text>
      <Text style={{ color: "#fff", marginTop: 10, fontSize: 16 }}>
        Intermediate training.
      </Text>
    </View>
  );
}
