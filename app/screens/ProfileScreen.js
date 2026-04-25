import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "psisense_user_profile";

export default function ProfileScreen({ navigation }) {

  const [country, setCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [sex, setSex] = useState("");
  const [ageGroup, setAgeGroup] = useState("");

  // ===============================
  // LOAD PROFILE
  // ===============================
  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const p = JSON.parse(saved);
        setCountry(p.country || "");
        setNationality(p.nationality || "");
        setSex(p.sex || "");
        setAgeGroup(p.ageGroup || "");
      }
    } catch (e) {
      console.log("Profile load error", e);
    }
  }

  // ===============================
  // SAVE PROFILE
  // ===============================
  async function saveProfile() {
    if (!country || !sex || !ageGroup) {
      Alert.alert(
        "Incomplete",
        "Country, Sex and Age Group are required."
      );
      return;
    }

    const profile = {
      country,
      nationality,
      sex,
      ageGroup
    };

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(profile)
      );

      Alert.alert("Saved", "Profile stored successfully.");
      navigation.goBack();
    } catch (e) {
      Alert.alert("Error", "Could not save profile.");
    }
  }

  // ===============================
  // UI
  // ===============================
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Text style={styles.title}>User Profile</Text>

      {/* COUNTRY */}
      <Text style={styles.label}>Country *</Text>
      <TextInput
        value={country}
        onChangeText={setCountry}
        placeholder="ex: Spain"
        placeholderTextColor="#666"
        style={styles.input}
      />

      {/* NATIONALITY */}
      <Text style={styles.label}>Nationality</Text>
      <TextInput
        value={nationality}
        onChangeText={setNationality}
        placeholder="ex: Spanish"
        placeholderTextColor="#666"
        style={styles.input}
      />

      {/* SEX */}
      <Text style={styles.label}>Sex *</Text>
      <View style={styles.row}>
        {["Male","Female","Other"].map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.choice,
              sex === option && styles.choiceActive
            ]}
            onPress={() => setSex(option)}
          >
            <Text style={styles.choiceText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* AGE */}
      <Text style={styles.label}>Age Group *</Text>
      <View style={styles.wrap}>
        {[
          "5-10","11-15","16-20","21-25",
          "26-35","36-45","46-60","60+"
        ].map(a => (
          <TouchableOpacity
            key={a}
            style={[
              styles.choiceSmall,
              ageGroup === a && styles.choiceActive
            ]}
            onPress={() => setAgeGroup(a)}
          >
            <Text style={styles.choiceText}>{a}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* SAVE BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={saveProfile}
      >
        <Text style={styles.buttonText}>
          Save Profile
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

// ===============================
// STYLES
// ===============================

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#0a0a0a"
  },

  content:{
    padding:24,
    paddingBottom:60
  },

  title:{
    color:"#acf92c",
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:30
  },

  label:{
    color:"#aaa",
    marginBottom:8,
    marginTop:18,
    fontSize:13
  },

  input:{
    backgroundColor:"#141414",
    borderRadius:12,
    padding:14,
    color:"#fff",
    fontSize:15
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },

  wrap:{
    flexDirection:"row",
    flexWrap:"wrap",
    gap:10
  },

  choice:{
    backgroundColor:"#1c1c1c",
    paddingVertical:12,
    paddingHorizontal:18,
    borderRadius:12
  },

  choiceSmall:{
    backgroundColor:"#1c1c1c",
    paddingVertical:10,
    paddingHorizontal:14,
    borderRadius:10,
    marginRight:10,
    marginBottom:10
  },

  choiceActive:{
    backgroundColor:"#acf92c"
  },

  choiceText:{
    color:"#fff",
    fontWeight:"bold"
  },

  button:{
    marginTop:40,
    backgroundColor:"#acf92c",
    paddingVertical:16,
    borderRadius:16,
    alignItems:"center"
  },

  buttonText:{
    color:"#000",
    fontSize:16,
    fontWeight:"bold"
  }

});