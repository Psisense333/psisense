import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, Linking, ScrollView } from "react-native";

export default function OptionsScreen() {
  const [musicOn, setMusicOn] = useState(true);
  const [effectsOn, setEffectsOn] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.inner}>
      
      <Text style={styles.title}>Options</Text>

      {/* --- AUDIO SETTINGS --- */}
      <Text style={styles.sectionTitle}>Audio</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Background Music</Text>
        <Switch
          value={musicOn}
          onValueChange={setMusicOn}
          thumbColor={musicOn ? "#acf92c" : "#888"}
          trackColor={{ true: "#4d6f25", false: "#333" }}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Sound / Visual Effects</Text>
        <Switch
          value={effectsOn}
          onValueChange={setEffectsOn}
          thumbColor={effectsOn ? "#acf92c" : "#888"}
          trackColor={{ true: "#4d6f25", false: "#333" }}
        />
      </View>

      {/* --- USER STATUS --- */}
      <Text style={styles.sectionTitle}>Your Status</Text>

      <View style={styles.statusBox}>
        <Text style={styles.statusLabel}>Account Type:</Text>
        <Text style={styles.statusValue}>Free</Text>

        <Text style={[styles.statusLabel, { marginTop: 10 }]}>Targets Access:</Text>
        <Text style={styles.statusValue}>Beginner Level</Text>

        <Text style={[styles.statusLabel, { marginTop: 10 }]}>Upgrades:</Text>
        <Text style={styles.statusValue}>Premium Not Activated</Text>

        <TouchableOpacity style={styles.upgradeButton}>
          <Text style={styles.upgradeText}>Upgrade to Premium</Text>
        </TouchableOpacity>
      </View>

      {/* --- SUPPORT --- */}
      <Text style={styles.sectionTitle}>Support</Text>

      <TouchableOpacity
        onPress={() => Linking.openURL("mailto:support@psisense.app")}
        style={styles.supportButton}
      >
        <Text style={styles.supportText}>Contact Support</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL("https://psisense.app/help")}
        style={styles.supportButton}
      >
        <Text style={styles.supportText}>Visit Help Center</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Linking.openURL("https://psisense.app/privacy")}
        style={styles.supportButton}
      >
        <Text style={styles.supportText}>Privacy Policy</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  inner: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#acf92c",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#acf92c",
    marginTop: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    borderColor: "#222",
    borderWidth: 1,
  },
  label: {
    color: "#fff",
    fontSize: 16,
  },
  statusBox: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 12,
    borderColor: "#222",
    borderWidth: 1,
  },
  statusLabel: {
    color: "#acf92c",
    fontSize: 16,
  },
  statusValue: {
    color: "#fff",
    fontSize: 16,
  },
  upgradeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#acf92c",
    borderRadius: 8,
  },
  upgradeText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
  },
  supportButton: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#111",
    borderRadius: 10,
    borderColor: "#222",
    borderWidth: 1,
  },
  supportText: {
    color: "#acf92c",
    textAlign: "center",
    fontSize: 16,
  },
});
