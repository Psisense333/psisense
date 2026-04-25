import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from "react-native";

import Svg, { Path } from "react-native-svg";
import { buildHeatmapMatrix } from "../../_services/analytics/demographicEngine";

// 👉 TEMP: until your worldGeo.json is restored
// you can comment this if needed
import worldMap from "../../_data/worldGeo.json";

const { width } = Dimensions.get("window");

export default function WorldHeatmapScreen() {
  const [loading, setLoading] = useState(true);
  const [matrix, setMatrix] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const data = await buildHeatmapMatrix("country", "sex");
      setMatrix(data);
    } catch (e) {
      console.log("HEATMAP ERROR:", e);
    } finally {
      setLoading(false);
    }
  }

  // ✅ LOADING STATE INSIDE COMPONENT
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#acf92c" />
        <Text style={styles.loadingText}>
          Analyzing global perception…
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Global Heatmap</Text>

      <View style={styles.mapContainer}>
        <Svg width={width} height={width * 0.6}>
          {worldMap?.features?.map((feature, index) => {
            const path = feature?.path || "";
            return (
              <Path
                key={index}
                d={path}
                stroke="#333"
                strokeWidth={0.5}
                fill="#1b1b1b"
              />
            );
          })}
        </Svg>
      </View>

      <Text style={styles.note}>
        Heatmap data will appear once sessions are collected.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111"
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111"
  },

  loadingText: {
    marginTop: 10,
    color: "#888"
  },

  title: {
    color: "#acf92c",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold"
  },

  mapContainer: {
    alignItems: "center"
  },

  note: {
    color: "#777",
    textAlign: "center",
    marginTop: 20
  }
});