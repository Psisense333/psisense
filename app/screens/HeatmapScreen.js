import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import { getSessions } from "../../_services/saveSession";

export default function HeatmapScreen() {
  const [points, setPoints] = useState([]);
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const sessions = await getSessions();

      if (!sessions || !Array.isArray(sessions)) {
        setPoints([]);
        return;
      }

      // TEMP fallback until heatmapBuilder exists
      const generatedPoints = sessions.map((s, i) => ({
        x: Math.random(),
        y: Math.random(),
        intensity: (s?.confidence || 50) / 100
      }));

      setPoints(generatedPoints);
    } catch (e) {
      console.log("HEATMAP LOAD ERROR:", e);
      setPoints([]);
    }
  }

  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setMapSize({ width, height });
      }}
    >
      <Text style={styles.title}>Global Heatmap</Text>

      <View style={styles.map}>
        {points.map((p, i) => (
          <View
            key={i}
            style={[
              styles.point,
              {
                left: p.x * mapSize.width,
                top: p.y * mapSize.height,
                opacity: p.intensity || 0.5
              }
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    padding: 20
  },

  title: {
    color: "#acf92c",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },

  map: {
    flex: 1,
    backgroundColor: "#111",
    borderRadius: 12,
    overflow: "hidden"
  },

  point: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#acf92c"
  }
});