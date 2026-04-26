import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../_firebase/firebaseConfig";

import {
  router,
  useLocalSearchParams
} from "expo-router";

export default function TargetListScreen() {

  const { level } = useLocalSearchParams();

  const initialLevel = Number(level || 1);

  const [targets, setTargets] = useState([]);
  const [filteredLevel, setFilteredLevel] = useState(initialLevel);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTargets();
  }, []);

  async function loadTargets() {
    try {

      const snapshot =
        await getDocs(collection(db, "Targets"));

      if (!snapshot?.docs) {
        setTargets([]);
        return;
      }

      const list = snapshot.docs.map((doc) => ({
        id: String(doc.id),
        ...doc.data(),
      }));

      setTargets(list);

    } catch (error) {

      console.log("FIREBASE LOAD ERROR:", error);

      setTargets([]);

    } finally {

      setLoading(false);

    }
  }

  const displayedTargets =
    targets.filter(
      t =>
        Number(t?.level || 0) ===
        Number(filteredLevel)
    );

  // FIXED (only one openTarget function)
  function openTarget(item) {

    router.push({
      pathname: "/screens/TargetDetailScreen",
      params: {
        targetId: item.targetNumber, // shows F82G49L etc
        level: filteredLevel,
        imageURL: item.imageURL
      }
    });

  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>
          Loading targets...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* LEVEL SELECTOR */}
      <View style={styles.levelRow}>

        {[1,2,3,4,5].map(level => (

          <TouchableOpacity
            key={level}
            style={[
              styles.levelButton,
              filteredLevel === level &&
              styles.activeButton
            ]}
            onPress={() =>
              setFilteredLevel(level)
            }
          >

            <Text
              style={[
                styles.levelText,
                filteredLevel === level &&
                styles.activeText
              ]}
            >
              {`Level ${level}`}
            </Text>

          </TouchableOpacity>

        ))}

      </View>

      {/* TARGET LIST */}
      <FlatList
        data={displayedTargets}

        keyExtractor={(item) =>
          String(item.id)
        }

        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No targets for this level
          </Text>
        }

        renderItem={({ item }) => {

          const number =
            String(item?.targetNumber || "");

          const task =
            String(item?.task || "");

          return (

            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                openTarget(item)
              }
            >

              <View style={styles.noImage}>
                <Text style={styles.qmark}>
                  ?
                </Text>
              </View>

              <View style={styles.info}>

                <Text style={styles.title}>
                  {`Target ${number}`}
                </Text>

                <Text style={styles.levelTextSmall}>
                  {`Level ${filteredLevel}`}
                </Text>

                <Text
                  numberOfLines={2}
                  style={styles.task}
                >
                  {task}
                </Text>

              </View>

            </TouchableOpacity>

          );
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:"#111",
    padding:10,
  },

  levelRow: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:15,
  },

  levelButton: {
    paddingVertical:8,
    paddingHorizontal:12,
    backgroundColor:"#222",
    borderRadius:8,
  },

  activeButton: {
    backgroundColor:"#acf92c",
  },

  levelText: {
    color:"#fff",
    fontWeight:"bold",
  },

  activeText: {
    color:"#000",
  },

  emptyText: {
    color:"#777",
    textAlign:"center",
    marginTop:40,
    fontSize:16,
  },

  card: {
    flexDirection:"row",
    backgroundColor:"#1b1b1b",
    borderRadius:10,
    marginBottom:12,
    padding:10,
  },

  noImage: {
    width:80,
    height:80,
    borderRadius:8,
    backgroundColor:"#333",
    alignItems:"center",
    justifyContent:"center",
    marginRight:10,
  },

  qmark: {
    color:"#777",
    fontSize:32,
  },

  info: {
    flex:1,
    justifyContent:"center",
  },

  title: {
    color:"#acf92c",
    fontSize:16,
    fontWeight:"bold",
  },

  levelTextSmall: {
    color:"#888",
    marginTop:2,
  },

  task: {
    color:"#bbb",
    marginTop:4,
  }

});