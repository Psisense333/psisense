import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";
import { analyzeDescription } from "../../_services/analytics/mirrorEngine";

export default function RevealTargetScreen() {

  const params = useLocalSearchParams();

  const targetId = params?.targetId || "Unknown";
  const userText = params?.userText || "";
  const imageURL = params?.imageURL || "";

  function fallbackAnalysis(text="") {

    const score = Math.min(
      100,
      text.length * 2
    );

    return {
      confidence: score,
      clarity: 2,
      stability: 2,
      signal: 2,

      perception:
        "Signal forming from limited perception data.",

      cognitive:
        "Short descriptive input detected.",

      sensory:
        "Low sensory detail.",

      reflection:
        score > 60
          ? "Perception signal forming."
          : "Signal still weak. Continue practicing."
    };
  }

  function handleReflection() {

    if (
      !userText ||
      userText.trim().length < 5
    ) {
      Alert.alert(
        "Not Enough Text",
        "Please enter a longer description."
      );
      return;
    }

    let result;

    try {

      const analysis =
        analyzeDescription(userText);

      result = {
        confidence:
          Number(
            analysis?.confidence || 0
          ),

        clarity:
          Number(
            analysis?.clarity || 0
          ),

        stability:
          Number(
            analysis?.stability || 0
          ),

        signal:
          Number(
            analysis?.signal || 0
          ),

        perception:
          analysis?.perception ||
          "Perception forming.",

        cognitive:
          analysis?.cognitive ||
          "Descriptive style detected.",

        sensory:
          analysis?.sensory ||
          "Sensory processing active.",

        reflection:
          analysis?.reflection ||
          "Mind attentive."
      };

    } catch(e) {

      console.log(
        "ANALYSIS ERROR:",
        e
      );

      result =
        fallbackAnalysis(userText);
    }

    router.push({
      pathname:
        "/screens/MirrorResultScreen",

      params: {
        confidence: result.confidence,
        perception: result.perception,
        cognitive: result.cognitive,
        sensory: result.sensory,
        reflection: result.reflection,
        targetId
      }
    });
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Target Revealed
      </Text>

      {imageURL ? (
        <Image
          source={{ uri: imageURL }}
          style={styles.image}
        />
      ) : (
        <Text style={styles.noImage}>
          No image available
        </Text>
      )}

      <Text style={styles.targetId}>
        Target ID: {targetId}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleReflection}
      >
        <Text style={styles.buttonText}>
          Analyze My Perception
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          router.push("/screens/SessionBriefingScreen")
        }
      >
        <Text style={styles.back}>
          New Session
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#161616",
    padding:20,
    alignItems:"center"
  },

  title:{
    color:"#acf92c",
    fontSize:26,
    fontWeight:"bold",
    marginBottom:20
  },

  image:{
    width:300,
    height:300,
    borderRadius:10,
    marginBottom:20
  },

  noImage:{
    color:"#777",
    marginBottom:20
  },

  targetId:{
    color:"#fff",
    fontSize:18,
    marginBottom:25
  },

  button:{
    backgroundColor:"#acf92c",
    padding:14,
    borderRadius:10,
    width:"100%",
    alignItems:"center"
  },

  buttonText:{
    fontSize:18,
    fontWeight:"bold",
    color:"#000"
  },

  back:{
    color:"#888",
    marginTop:25
  }

});