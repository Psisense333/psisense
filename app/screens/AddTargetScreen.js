import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AddTargetScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [targetNumber, setTargetNumber] = useState("");
  const [taskText, setTaskText] = useState("");
  const [level, setLevel] = useState(1);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!image || !targetNumber || !taskText) {
      alert("Please fill all fields and upload a photo.");
      return;
    }

    setLoading(true);

    try {
      const storage = getStorage();
      const firestore = getFirestore();

      const imageRef = ref(storage, `targets/${Date.now()}.jpg`);
      const response = await fetch(image);
      const blob = await response.blob();
      await uploadBytes(imageRef, blob);

      const imageURL = await getDownloadURL(imageRef);

      await addDoc(collection(firestore, "Targets"), {
        targetNumber,
        taskText,
        level,
        imageURL,
        createdAt: serverTimestamp()
      });

      alert("Target uploaded successfully!");
      navigation.goBack();
    } catch (err) {
      alert("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add New Target</Text>

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.preview} />
        ) : (
          <Text style={styles.imagePickerText}>Tap to upload image</Text>
        )}
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
        placeholder="Viewer describes the target..."
        placeholderTextColor="#777"
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

      <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Text style={styles.saveButtonText}>Save Target</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { color: "#acf92c", fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  imagePicker: {
    height: 220,
    backgroundColor: "#222",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  imagePickerText: { color: "#777" },
  preview: { width: "100%", height: "100%", borderRadius: 12 },
  label: { color: "#acf92c", fontWeight: "bold", marginTop: 10 },
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
  saveButtonText: { color: "#000", fontWeight: "bold", fontSize: 16 }
});
