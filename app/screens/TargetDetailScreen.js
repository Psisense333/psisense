import React from "react";
import {
 View,
 Text,
 TouchableOpacity,
 StyleSheet
} from "react-native";

import {
 router,
 useLocalSearchParams
} from "expo-router";

export default function TargetDetailScreen(){

 const params=useLocalSearchParams();

 const targetId=params?.targetId || "Unknown";
 const level=params?.level || "1";
 const imageURL=params?.imageURL || "";

 return(

<View style={styles.container}>

<Text style={styles.title}>
Target Detail
</Text>

<Text style={styles.info}>
Target ID: {targetId}
</Text>

<Text style={styles.info}>
Level: {level}
</Text>

<TouchableOpacity
 style={styles.button}
 onPress={()=>

   router.push({
    pathname:"/screens/RemoteViewingScreen",

    params:{
      targetId,
      level,
      imageURL
    }

   })

 }
>

<Text style={styles.buttonText}>
Begin Viewing Session
</Text>

</TouchableOpacity>

<TouchableOpacity
 onPress={()=>
   router.back()
 }
>

<Text style={styles.back}>
Back
</Text>

</TouchableOpacity>

</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#111",
justifyContent:"center",
alignItems:"center",
padding:20
},

title:{
color:"#acf92c",
fontSize:28,
fontWeight:"bold",
marginBottom:30
},

info:{
color:"#fff",
fontSize:18,
marginBottom:12
},

button:{
backgroundColor:"#acf92c",
padding:15,
borderRadius:12,
marginTop:30
},

buttonText:{
color:"#000",
fontWeight:"bold"
},

back:{
color:"#888",
marginTop:30
}

});