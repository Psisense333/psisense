import React, { useEffect, useState } from "react"; import {
View, Text,
StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator
} from "react-native";

import { buildStats } from "../../_services/analytics/analyticsEngine";

export default function AnalyticsDashboardScreen({ navigation }) {
 

const [stats,setStats] = useState(null);
const [loading,setLoading] = useState(true);


useEffect(()=>{ loadStats();
},[]);


async function loadStats(){ setLoading(true);
const data = await buildStats(); setStats(data); setLoading(false);
}


function renderSection(title,data){

if(!data || Object.keys(data).length===0){ return (
<View style={styles.card}>
<Text style={styles.sectionTitle}>{title}</Text>
<Text style={styles.empty}>No data yet</Text>
</View>
);
}

return(
<View style={styles.card}>
<Text style={styles.sectionTitle}>{title}</Text>

{Object.entries(data)
.sort((a,b)=>b[1]-a[1])
.map(([label,value])=>(
<View key={label} style={styles.row}>
<Text style={styles.label}>{label}</Text>
<Text style={styles.value}>{value}%</Text>
</View>
))
}
 
</View>
);
}



if(loading){ return(
<View style={styles.loadingContainer}>
<ActivityIndicator size="large" color="#acf92c"/>
<Text style={styles.loadingText}>Analyzing sessions...
</Text>
</View>
);
}



if(!stats){ return(
<View style={styles.loadingContainer}>
<Text style={styles.empty}>No sessions recorded yet</Text>

<TouchableOpacity style={styles.button} onPress=
{()=>navigation.navigate("SessionBriefing")}
>
<Text style={styles.buttonText}>Start Session</Text>
</TouchableOpacity>
</View>
);
}



return(
<ScrollView style={styles.container}
contentContainerStyle={styles.content}
>
 
<Text style={styles.title}>Analytics Dashboard</Text>


{/* TOTAL */}
<View style={styles.totalBox}>
<Text style={styles.totalNumber}>
{stats.sessionsCount}
</Text>
<Text style={styles.totalLabel}> Total Sessions
</Text>
</View>



{renderSection("By Country", stats.countries)}
{renderSection("By Sex", stats.sex)}
{renderSection("By Age Group", stats.age)}



{/* REFRESH */}
<TouchableOpacity style={styles.button} onPress={loadStats}
>
<Text style={styles.buttonText}> Refresh Data
</Text>
</TouchableOpacity>


{/* BACK */}
<TouchableOpacity style={styles.secondaryButton} onPress={()=>navigation.goBack()}
>
<Text style={styles.secondaryText}> Back
</Text>
</TouchableOpacity>

</ScrollView>
 
);
}


const styles = StyleSheet.create({ container:{
flex:1, backgroundColor:"#0a0a0a"
},

content:{ padding:24, paddingBottom:60
},

title:{ color:"#acf92c", fontSize:28, fontWeight:"bold", textAlign:"center", marginBottom:30
},

totalBox:{ alignItems:"center", marginBottom:30
},

totalNumber:{ fontSize:56, color:"#fff", fontWeight:"bold"
},

totalLabel:{ color:"#888", marginTop:4
},

card:{ backgroundColor:"#141414",
 
borderRadius:16, padding:20, marginBottom:22
},

sectionTitle:{ color:"#acf92c", fontWeight:"bold", marginBottom:14, letterSpacing:0.5
},

row:{ flexDirection:"row",
justifyContent:"space-between", marginBottom:10
},

label:{ color:"#ddd"
},

value:{ color:"#acf92c", fontWeight:"bold"
},

empty:{ color:"#777", textAlign:"center", marginTop:10
},

loadingContainer:{ flex:1, justifyContent:"center", alignItems:"center",
backgroundColor:"#0a0a0a"
},

loadingText:{ marginTop:15, color:"#aaa"
 
},

button:{ backgroundColor:"#acf92c", paddingVertical:15, borderRadius:14, alignItems:"center", marginTop:20
},

buttonText:{ color:"#000", fontWeight:"bold", fontSize:16
},

secondaryButton:{ marginTop:14, alignItems:"center"
},

secondaryText:{ color:"#888"
}

});
