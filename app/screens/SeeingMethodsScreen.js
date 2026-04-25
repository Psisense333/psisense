import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function SeeingMethodsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.inner}>
      
      <Text style={styles.title}>Seeing Methods</Text>

      <Text style={styles.sectionTitle}>1. The Quiet Mind Method</Text>
      <Text style={styles.text}>
        This method teaches you to calm the analytical mind and let intuitive impressions rise. 
        Sit quietly, breathe slowly, and allow your awareness to soften. Do not “try” to see — 
        instead, let images, sensations, and subtle impressions appear naturally.
      </Text>

      <Text style={styles.sectionTitle}>2. Visual Impression Technique</Text>
      <Text style={styles.text}>
        Focus on the target ID and observe the first flashes of form, color, texture, or shape 
        that appear in your mind. These quick snapshots often contain the core truth of the target. 
        Do not judge them — write down anything that comes.
      </Text>

      <Text style={styles.sectionTitle}>3. Sensory Perception Approach</Text>
      <Text style={styles.text}>
        Try to “feel” the target instead of seeing it. Ask yourself:
        {"\n"}• Is it hot or cold?
        {"\n"}• Light or heavy?
        {"\n"}• Soft or rigid?
        {"\n"}• Indoors or outdoors?
        {"\n"}Your body is often more accurate than the mind.
      </Text>

      <Text style={styles.sectionTitle}>4. Analogical Mapping</Text>
      <Text style={styles.text}>
        If the target feels unclear, compare it to known objects. For example:
        {"\n"}• “Feels like a mountain.” 
        {"\n"}• “Shape reminds me of a circle.” 
        {"\n"}• “Texture like metal.” 
        These analogies help decode the hidden target.
      </Text>

      <Text style={styles.sectionTitle}>5. Emotional Resonance Method</Text>
      <Text style={styles.text}>
        Focus on the emotional atmosphere of the target.  
        Ask:
        {"\n"}• What emotion does the target radiate?
        {"\n"}• Calmness? Excitement? Mystery?  
        Emotions often bypass analytical filters and reveal the nature of the target.
      </Text>

      <Text style={styles.sectionTitle}>6. Automatic Drawing</Text>
      <Text style={styles.text}>
        Instead of thinking, let your hand move freely.  
        Draw lines, curves, shapes, or forms that emerge spontaneously.  
        These drawings often match the structure of the target image.
      </Text>

      <Text style={styles.sectionTitle}>7. Layered Perception</Text>
      <Text style={styles.text}>
        View the target in layers:
        {"\n"}• First layer: basic shapes and colors  
        {"\n"}• Second layer: textures and materials  
        {"\n"}• Third layer: meaning and context  
        This structured approach sharpens accuracy.
      </Text>

      <Text style={styles.sectionTitle}>8. The “Let Go” Principle</Text>
      <Text style={styles.text}>
        Do not force visions. The more you try, the weaker the psychic signal becomes.
        Relax, allow, receive — the target emerges when the mind is quiet and receptive.
      </Text>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  inner: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#acf92c",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#acf92c",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
  },
});
