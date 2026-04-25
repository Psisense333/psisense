import React from "react";
import { View, Text } from "react-native";

export default function Level5Screen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#acf92c", fontSize: 28, fontWeight: "bold" }}>
        Level 5
      </Text>
      <Text style={{ color: "#fff", marginTop: 10, fontSize: 16 }}>
        Master-level psychic challenges.
      </Text>
    </View>
  );
}
