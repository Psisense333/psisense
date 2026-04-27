import React, { useEffect } from "react";

import {
 View,
 Text,
 StyleSheet,
 ScrollView,
 TouchableOpacity
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";

import {
 recordSession
} from "../../_services/session/sessionManager";

export default function MirrorResultScreen(){

 const params =
   useLocalSearchParams();

 const confidence =
   Number(params?.confidence || 0);

 const perception =
   params?.perception || "";

 const cognitive =
   params?.cognitive || "";

 const sensory =
   params?.sensory || "";

 const reflection =
   params?.reflection || "";

 const targetId =
   params?.targetId || "";

 useEffect(() => {

   if(targetId){

     recordSession({
       targetId,

       result:{
         confidence,
         perception,
         cognitive,
         sensory,
         reflection
       }

     });

   }

 },[]);

 function getTier(score){

   if(score>=85) return "Elite Perception";
   if(score>=70) return "Advanced Alignment";
   if(score>=50) return "Developing Accuracy";

   return "Early Signal";

 }

 const tier =
   getTier(confidence);

 return(

<ScrollView
 style={styles.container}
 contentContainerStyle={styles.content}
>

<Text style={styles.title}>
Mirror Analysis
</Text>

<Text style={styles.score}>
{confidence}%
</Text>

<Text style={styles.tier}>
{tier}
</Text>

<View style={styles.card}>
<Text style={styles.line}>
{perception}
</Text>

<Text style={styles.line}>
{cognitive}
</Text>

<Text style={styles.line}>
{sensory}
</Text>

<Text style={styles.line}>
{reflection}
</Text>
</View>

<TouchableOpacity
 style={styles.button}

 onPress={()=>
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

 onPress={()=>
 router.push(
 "/screens/MainMenuScreen"
 )
}
>

<Text style={styles.buttonText}>
Main Menu
</Text>

</TouchableOpacity>

</ScrollView>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#0a0a0a"
},

content:{
padding:24
},

title:{
color:"#acf92c",
fontSize:28,
fontWeight:"bold",
textAlign:"center",
marginBottom:30
},

score:{
color:"#fff",
fontSize:52,
textAlign:"center"
},

tier:{
color:"#acf92c",
textAlign:"center",
marginBottom:30
},

card:{
backgroundColor:"#141414",
padding:20,
borderRadius:14,
marginBottom:30
},

line:{
color:"#ddd",
marginBottom:12
},

button:{
backgroundColor:"#acf92c",
padding:15,
borderRadius:12,
marginTop:12,
alignItems:"center"
},

buttonText:{
color:"#000",
fontWeight:"bold"
}

});