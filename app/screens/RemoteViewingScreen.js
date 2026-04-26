import React, { useState } from "react";
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 ScrollView
} from "react-native";

import {
 router,
 useLocalSearchParams
} from "expo-router";

export default function RemoteViewingScreen(){

 const {
   targetId,
   level,
   imageURL
 } = useLocalSearchParams();

 const [userText,setUserText] =
   useState("");

 function revealTarget(){

   router.push({
     pathname:
      "/screens/RevealTargetScreen",

     params:{
       targetId,
       level,
       userText,
       imageURL
     }

   });

 }

 return (

 <ScrollView
  style={styles.container}
  contentContainerStyle={{
   paddingBottom:50
  }}
 >

 <Text style={styles.title}>
 Remote Viewing Session
 </Text>

 <Text style={styles.target}>
 Target ID: {targetId}
 </Text>

 <Text style={styles.label}>
 Describe impressions:
 </Text>

 <TextInput
   style={styles.input}
   multiline
   value={userText}
   onChangeText={setUserText}
   placeholder="Shapes, colors, textures, motion..."
   placeholderTextColor="#666"
 />

 <TouchableOpacity
  style={styles.button}
  onPress={revealTarget}
 >
  <Text style={styles.buttonText}>
   Submit + Reveal Target
  </Text>
 </TouchableOpacity>

 <TouchableOpacity
  style={styles.button}
  onPress={() =>
   router.push(
    "/screens/SessionBriefingScreen"
   )
  }
 >
 <Text style={styles.buttonText}>
 New Session
 </Text>
 </TouchableOpacity>

 <TouchableOpacity
  style={styles.button}
  onPress={() =>
   router.push(
    "/screens/MainMenuScreen"
   )
  }
 >
 <Text style={styles.buttonText}>
 Back To Main Menu
 </Text>
 </TouchableOpacity>

 </ScrollView>

 );
}

const styles=StyleSheet.create({

container:{
 flex:1,
 backgroundColor:"#111",
 padding:20
},

title:{
 color:"#acf92c",
 fontSize:28,
 fontWeight:"bold",
 marginBottom:20
},

target:{
 color:"#fff",
 fontSize:18,
 marginBottom:25
},

label:{
 color:"#aaa",
 marginBottom:10
},

input:{
 backgroundColor:"#1b1b1b",
 color:"#fff",
 minHeight:180,
 borderRadius:12,
 padding:15,
 textAlignVertical:"top"
},

button:{
 backgroundColor:"#acf92c",
 marginTop:20,
 padding:15,
 borderRadius:12,
 alignItems:"center"
},

buttonText:{
 color:"#000",
 fontWeight:"bold"
}

});