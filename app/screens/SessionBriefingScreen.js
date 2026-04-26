import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SessionBriefingScreen() {

  const [country, setCountry] = useState("United States");
  const [sex, setSex] = useState("Male");
  const [ageGroup, setAgeGroup] = useState("21-25");

  function startSession(level) {
    router.push({
      pathname: "/screens/TargetListScreen",
      params: {
        level,
        country,
        sex,
        ageGroup
      }
    });
  }

  const countries = [
    "United States","United Kingdom","Germany","France","Spain","Italy",
    "Canada","Australia","India","Japan"
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >

      <Text style={styles.title}>Session Briefing</Text>

      <Text style={styles.label}>Country</Text>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={country}
          onValueChange={setCountry}
          dropdownIconColor="#acf92c"
          style={{ color:"#fff" }}
        >
          {countries.map(c => (
            <Picker.Item key={c} label={c} value={c} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Sex</Text>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={sex}
          onValueChange={setSex}
          dropdownIconColor="#acf92c"
          style={{ color:"#fff" }}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <Text style={styles.label}>Age Range</Text>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={ageGroup}
          onValueChange={setAgeGroup}
          dropdownIconColor="#acf92c"
          style={{ color:"#fff" }}
        >
          {[
            "11-15","16-20","21-25","26-30","31-35",
            "36-40","41-45","46-50","51-60","60+"
          ].map(a => (
            <Picker.Item key={a} label={a} value={a} />
          ))}
        </Picker>
      </View>

      {[1,2,3,4,5].map(level => (
        <TouchableOpacity
          key={level}
          style={styles.button}
          onPress={() => startSession(level)}
        >
          <Text style={styles.buttonText}>
            Level {level}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/screens/MainMenuScreen")}
      >
        <Text style={styles.backText}>
          Back to Main Menu
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#0a0a0a",
    padding:20
  },

  title: {
    color:"#acf92c",
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:25
  },

  label: {
    color:"#aaa",
    marginBottom:6,
    marginTop:14
  },

  dropdown: {
    backgroundColor:"#141414",
    borderRadius:12
  },

  button: {
    backgroundColor:"#acf92c",
    padding:16,
    borderRadius:14,
    alignItems:"center",
    marginTop:18
  },

  buttonText: {
    color:"#000",
    fontWeight:"bold",
    fontSize:16
  },

  backButton: {
    marginTop:25,
    alignItems:"center"
  },

  backText: {
    color:"#888"
  }
});