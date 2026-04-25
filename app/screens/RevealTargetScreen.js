import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

import { analyzeDescription } from "../../_services/analytics/mirrorEngine";

export default function RevealTargetScreen({ route, navigation }) {

  const { target, userText, userMeta } = route.params || {};

  function fallbackAnalysis(text = "") {
    const lengthScore = Math.min(100, text.length * 2);

    return {
      confidence: lengthScore,
      clarity: 2,
      stability: 2,
      signal: 2,
      perception: "Signal forming from limited perception data.",
      cognitive: "Short descriptive input detected.",
      sensory: "Low sensory detail.",
      reflection:
        lengthScore > 60
          ? "Perception signal forming."
          : "Signal still weak. Continue practicing."
    };
  }

  function handleReflection() {

    if (!userText || typeof userText !== "string" || userText.trim().length < 5) {
      Alert.alert("Not Enough Text", "Please write a longer description.");
      return;
    }

    let result;

    try {
      const analysis = analyzeDescription(userText);

      result = {
        confidence: Number(analysis?.confidence ?? 0),
        clarity: Number(analysis?.clarity ?? 0),
        stability: Number(analysis?.stability ?? 0),
        signal: Number(analysis?.signal ?? 0),

        perception: analysis?.perception ?? "Perception forming from your input.",
        cognitive: analysis?.cognitive ?? "Descriptive style detected.",
        sensory: analysis?.sensory ?? "Sensory processing active.",
        reflection: analysis?.reflection ?? "Mind attentive to perception signals."
      };

    } catch (e) {
      console.log("ANALYSIS ERROR:", e);
      result = fallbackAnalysis(userText);
    }

    navigation.navigate("MirrorResult", {
      result,
      targetId: target?.id,
      userMeta
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Target Revealed</Text>

      <Image
        source={{ uri: target?.imageURL || "" }}
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={handleReflection}>
        <Text style={styles.buttonText}>Analyze My Perception</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    padding: 20,
    alignItems: "center"
  },

  title: {
    color: "#acf92c",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 25
  },

  button: {
    backgroundColor: "#acf92c",
    padding: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center"
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  }
});