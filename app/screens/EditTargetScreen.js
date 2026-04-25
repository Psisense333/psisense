import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export default function EditTargetScreen({ route, navigation }) {
  const { target } = route.params;

  const [image, setImage] = useState(target.imageURL);
  const [targetNumber, setTargetNumber] = useState(target.targetNumber);
  const [taskText, setTaskText] = useState(target.taskText);
  const [level, setLevel] = useState(target.level);
  const [loading, setLoading] = useState(false);

  const pickNewImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);

    try {
      const firestore = getFirestore();
      const storage = getStorage();
      const docRef = doc(firestore, "Targets", target.id);

      let imageURL = target.imageURL;

      if (image !== target.imageURL) {
        const imageRef = ref(storage, `targets/${Date.now()}.jpg`);

        const response = await fetch(image);
        const blob = await response.blob();
        await uploadBytes(imageRef, blob);

        imageURL = await getDownloadURL(imageRef);
      }

      await updateDoc(docRef, {
        targetNumber,
        taskText,
        level,
        imageURL
      });

      alert("Target updated successfully!");
      navigation.goBack();
    } catch (err) {
      alert("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Edit Target</Text>

      <TouchableOpacity onPress={pickNewImage}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>

      <Text style={styles.label}>Target Number</Text>
      <TextInput
        style={styles.input}
        value={targetNumber}
        onChangeText={setTargetNumber}
        placeholder="RD634S74"
        placeholderTextColor="#777"
      />

      <Text style={styles.label}>Task Text</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        multiline
        value={taskText}
        onChangeText={setTaskText}
      />

      <Text style={styles.label}>Difficulty Level</Text>
      <View style={styles.levelRow}>
        {[1, 2, 3, 4, 5].map((lvl) => (
          <TouchableOpacity
            key={lvl}
            style={[
              styles.levelBox,
              level === lvl && styles.levelBoxActive
            ]}
            onPress={() => setLevel(lvl)}
          >
            <Text
              style={[
                styles.levelText,
                level === lvl && styles.levelTextActive
              ]}
            >
              {lvl}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleUpdate} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Text style={styles.saveButtonText}>Update Target</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { color: "#acf92c", fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  image: { width: "100%", height: 260, borderRadius: 12, marginBottom: 20 },
  label: { color: "#acf92c", marginTop: 8 },
  input: {
    backgroundColor: "#181818",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginTop: 6
  },
  levelRow: { flexDirection: "row", marginTop: 10 },
  levelBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  levelBoxActive: { backgroundColor: "#acf92c", borderColor: "#acf92c" },
  levelText: { color: "#ccc" },
  levelTextActive: { color: "#000", fontWeight: "bold" },
  saveButton: {
    backgroundColor: "#acf92c",
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center"
  },
  saveButtonText: { color: "#000", fontSize: 16, fontWeight: "bold" }
});
