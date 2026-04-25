import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { recordSession } from "../../_services/session/sessionManager";

export default function MirrorResultScreen({ navigation, route }) {

  const { result, targetId, userMeta } = route.params || {};

  // ✅ RECORD SESSION (SAFE)
  useEffect(() => {
    if (result && targetId && userMeta) {
      recordSession({
        result,
        targetId,
        userMeta
      });
    }
  }, []);

  // ✅ SAFE RESULT MAPPING
  const safeResult =
    result && typeof result === "object"
      ? {
          confidence: Number(result.confidence) || 0,
          focusLine: String(result.perception ?? ""),
          styleLine: String(result.cognitive ?? ""),
          sensoryLine: String(result.sensory ?? ""),
          reflectionLine: String(result.reflection ?? "")
        }
      : {
          confidence: 0,
          focusLine: "",
          styleLine: "",
          sensoryLine: "",
          reflectionLine: ""
        };

  const {
    confidence,
    focusLine,
    styleLine,
    sensoryLine,
    reflectionLine
  } = safeResult;

  function getTier(score) {
    if (score >= 85) return "Elite Perception";
    if (score >= 70) return "Advanced Alignment";
    if (score >= 50) return "Developing Accuracy";
    if (score >= 30) return "Early Sensitivity";
    return "Unformed Signal";
  }

  const tier = getTier(confidence);

  function MeterBar({ value }) {
    return (
      <View style={styles.meterBackground}>
        <View style={[styles.meterFill, { width: `${value}%` }]} />
      </View>
    );
  }

  function radar(score) {
    const filled = Math.round(score / 10);
    const empty = 10 - filled;
    return "●".repeat(filled) + "○".repeat(empty);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <Text style={styles.title}>Mirror Analysis</Text>

      <View style={styles.scoreBox}>
        <Text style={styles.scoreValue}>{confidence}%</Text>
        <Text style={styles.scoreTier}>{tier}</Text>
        <MeterBar value={confidence} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Perceptual Profile</Text>
        <Text style={styles.line}>{focusLine}</Text>
        <Text style={styles.line}>{styleLine}</Text>
        <Text style={styles.line}>{sensoryLine}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Signal Structure</Text>

        <View style={styles.radarRow}>
          <Text style={styles.radarLabel}>Clarity</Text>
          <Text style={styles.radar}>{radar(confidence)}</Text>
        </View>

        <View style={styles.radarRow}>
          <Text style={styles.radarLabel}>Stability</Text>
          <Text style={styles.radar}>{radar(confidence * 0.9)}</Text>
        </View>

        <View style={styles.radarRow}>
          <Text style={styles.radarLabel}>Signal</Text>
          <Text style={styles.radar}>{radar(confidence * 0.8)}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Insight</Text>
        <Text style={styles.reflection}>{reflectionLine}</Text>
      </View>

      <Text style={styles.footer}>perception analysis matrix</Text>

      {/* NEW SESSION */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SessionBriefing")}
      >
        <Text style={styles.buttonText}>New Session</Text>
      </TouchableOpacity>

      {/* GLOBAL MAP */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Heatmap")}
      >
        <Text style={styles.buttonText}>Global Map</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a"
  },

  content: {
    padding: 24,
    paddingBottom: 60
  },

  title: {
    color: "#acf92c",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 28,
    letterSpacing: 1
  },

  scoreBox: {
    alignItems: "center",
    marginBottom: 30
  },

  scoreValue: {
    color: "#fff",
    fontSize: 52,
    fontWeight: "bold"
  },

  scoreTier: {
    color: "#acf92c",
    fontSize: 16,
    marginBottom: 10
  },

  meterBackground: {
    width: "100%",
    height: 8,
    backgroundColor: "#222",
    borderRadius: 10,
    overflow: "hidden"
  },

  meterFill: {
    height: "100%",
    backgroundColor: "#acf92c"
  },

  card: {
    backgroundColor: "#141414",
    borderRadius: 16,
    padding: 20,
    marginBottom: 22
  },

  sectionTitle: {
    color: "#acf92c",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 12,
    letterSpacing: 0.5
  },

  line: {
    color: "#e8e8e8",
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 22
  },

  reflection: {
    color: "#cfcfcf",
    fontSize: 14,
    lineHeight: 22
  },

  radarRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },

  radarLabel: {
    color: "#aaa"
  },

  radar: {
    color: "#acf92c",
    fontSize: 14
  },

  footer: {
    textAlign: "center",
    color: "#666",
    marginVertical: 20,
    fontSize: 12,
    letterSpacing: 1
  },

  button: {
    backgroundColor: "#acf92c",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16
  }
});