import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { saveProfile } from "../../_services/storage/ProfileStorage";

export default function SignupScreen({ navigation }) {

  const [country,setCountry]=useState("");
  const [nationality,setNationality]=useState("");
  const [sex,setSex]=useState("");
  const [age,setAge]=useState("");

  async function handleSave(){
    const profile={
      country,
      nationality,
      sex,
      age:Number(age),
      created:Date.now()
    };

    await saveProfile(profile);
    navigation.replace("MainMenu");
  }

  return(
    <View style={s.container}>
      <Text style={s.title}>Create Profile</Text>

      <Input label="Country" value={country} set={setCountry}/>
      <Input label="Nationality" value={nationality} set={setNationality}/>
      <Input label="Sex" value={sex} set={setSex}/>
      <Input label="Age" value={age} set={setAge} numeric/>

      <TouchableOpacity style={s.btn} onPress={handleSave}>
        <Text style={s.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

function Input({label,value,set,numeric}){
  return(
    <>
      <Text style={s.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={set}
        keyboardType={numeric?"numeric":"default"}
        style={s.input}
        placeholderTextColor="#555"
      />
    </>
  );
}

const s=StyleSheet.create({
container:{flex:1,backgroundColor:"#0a0a0a",padding:24},
title:{color:"#acf92c",fontSize:28,fontWeight:"bold",marginBottom:25},
label:{color:"#aaa",marginTop:15},
input:{backgroundColor:"#111",color:"#fff",padding:14,borderRadius:10,marginTop:5},
btn:{backgroundColor:"#acf92c",marginTop:40,padding:16,borderRadius:14,alignItems:"center"},
btnText:{color:"#000",fontWeight:"bold",fontSize:16}
});