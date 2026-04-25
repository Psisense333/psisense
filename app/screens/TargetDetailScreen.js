// app/src/screens/TargetDetailScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function TargetDetailScreen({ route, navigation }) {
  const { target, level, userMeta } = route.params || {};
  const [text, setText] = useState("");

  function submit() {
    if (!target) return;

    navigation.navigate("RevealTarget", {
      target,
      userText: text,
      userMeta
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.targetNumber}>
        Target {target?.targetNumber}
      </Text>

      <Text style={styles.task}>
        Connect to and describe the target.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Type your perception..."
        placeholderTextColor="#666"
        multiline
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#0a0a0a",
    padding:20
  },

  targetNumber: {
    color:"#acf92c",
    fontSize:20,
    textAlign:"center",
    marginBottom:10,
    fontWeight:"bold"
  },

  task: {
    color:"#bbb",
    fontSize:16,
    marginBottom:20,
    textAlign:"center"
  },

  input: {
    backgroundColor:"#141414",
    borderRadius:14,
    padding:16,
    color:"#fff",
    height:220,
    textAlignVertical:"top"
  },

  button: {
    backgroundColor:"#acf92c",
    padding:16,
    borderRadius:14,
    alignItems:"center",
    marginTop:20
  },

  buttonText: {
    color:"#000",
    fontWeight:"bold"
  }
});