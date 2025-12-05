import React from "react";
import { View, Text } from "react-native";

export default function LeaderboardScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#acf92c", fontSize: 28, fontWeight: "bold" }}>
        Leaderboard
      </Text>
      <Text style={{ color: "#fff", marginTop: 10, fontSize: 16 }}>
        Top psychics around the world.
      </Text>
    </View>
  );
}
