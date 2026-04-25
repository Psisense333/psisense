import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reports will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#111",
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color:"#acf92c",
    fontSize:18
  }
});