// src/screens/AdminUploadTargetScreen.js

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import styles from "../src/styles/styles"; 
import * as DocumentPicker from "expo-document-picker";
import { storage, db } from "../_firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function AdminUploadTargetScreen() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [level, setLevel] = useState("");
  const [number, setNumber] = useState("");
  const [riddleNumber, setRiddleNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const file = await DocumentPicker.getDocumentAsync({
      type: "image/*",
      copyToCacheDirectory: true,
    });

    if (file.type === "success") {
      setImage(file);
    }
  };

  const uploadTarget = async () => {
    if (!image) return alert("Select an image first!");

    setLoading(true);

    try {
      // 1. Upload to Firebase Storage
      const imgRef = ref(storage, `targets/${Date.now()}_${image.name}`);
      const img = await fetch(image.uri);
      const bytes = await img.blob();
      await uploadBytes(imgRef, bytes);
      const url = await getDownloadURL(imgRef);

      // 2. Save target metadata
      await addDoc(collection(db, "targets"), {
        title,
        task,
        level: Number(level),
        number: Number(number),
        riddleNumber,
        imageUrl: url,
        createdAt: serverTimestamp(),
      });

      setLoading(false);
      alert("Target uploaded successfully!");

      // Reset form
      setImage(null);
      setTitle("");
      setTask("");
      setLevel("");
      setNumber("");
      setRiddleNumber("");
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Target Upload</Text>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick Image from Device</Text>
      </TouchableOpacity>

      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 200, height: 200, marginVertical: 20 }}
          resizeMode="contain"
        />
      )}

      <TextInput
        placeholder="Target Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Task Description"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <TextInput
        placeholder="Level (1–5)"
        value={level}
        onChangeText={setLevel}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Target Number"
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Riddle Number"
        value={riddleNumber}
        onChangeText={setRiddleNumber}
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#acf92c" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={uploadTarget}>
          <Text style={styles.buttonText}>Upload Target</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
