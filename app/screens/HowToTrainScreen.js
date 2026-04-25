import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function HowToTrainPlayScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.inner}>
      <Text style={styles.title}>How To Train & Play Psisense</Text>

      {/* SECTION 1 */}
      <Text style={styles.heading}>What Are Targets?</Text>
      <Text style={styles.paragraph}>
        A "target" is an image, object, symbol, or photograph the user attempts
        to perceive using intuitive or remote-viewing methods. Targets are
        hidden behind randomly generated target IDs, such as AB492731 or
        FT947321.
      </Text>

      {/* SECTION 2 */}
      <Text style={styles.heading}>What Are Target Numbers?</Text>
      <Text style={styles.paragraph}>
        Every target in Psisense is associated with a unique combination of
        letters and numbers. These IDs do NOT contain clues. They simply act as
        a “mental address” that you tune into before attempting to perceive the
        target.
      </Text>

      {/* SECTION 3 */}
      <Text style={styles.heading}>What Is The Task?</Text>
      <Text style={styles.paragraph}>
        When you begin a Remote Viewing session, you receive:
        {"\n"}• A target ID
        {"\n"}• A task: “Focus on the following target ID and describe it as
        accurately as possible.”
        {"\n\n"}
        Your job is to describe impressions — shapes, colors, textures, and
        emotions — without guessing or analyzing.
      </Text>

      {/* SECTION 4 */}
      <Text style={styles.heading}>How To Prepare</Text>
      <Text style={styles.paragraph}>
        • Sit comfortably and relax your breathing.
        {"\n"}• Keep your mind quiet and neutral.
        {"\n"}• Avoid trying to guess what the target is.
        {"\n"}• Write or draw impressions as they come.
      </Text>

      {/* SECTION 5 */}
      <Text style={styles.heading}>How The Session Works</Text>
      <Text style={styles.paragraph}>
        1. You press “Start Remote Viewing Session.”
        {"\n"}2. You receive a random target ID.
        {"\n"}3. You focus on the ID and gather impressions.
        {"\n"}4. When ready, you tap “Reveal Target.”
        {"\n"}5. The target image appears so you can compare results.
      </Text>

      {/* SECTION 6 */}
      <Text style={styles.heading}>Where Do These Methods Come From?</Text>
      <Text style={styles.paragraph}>
        Psisense is inspired by traditional remote-viewing methodologies
        developed in parapsychological research programs. These include mental
        focusing, intuitive perception, ideograms, and non-analytical
        deductive-free viewing.
      </Text>
      <Text style={styles.paragraph}>
        If permissions allow, an overview of the International Remote Viewing 
        Association (IRVA) and links to their resources may be included here.
      </Text>

      {/* SECTION 7 */}
      <Text style={styles.heading}>Tips for Better Accuracy</Text>
      <Text style={styles.paragraph}>
        • Don’t force impressions — allow them.
        {"\n"}• First impressions are usually the strongest.
        {"\n"}• Avoid guessing. Simply describe.
        {"\n"}• Practice improves clarity and consistency.
      </Text>

      {/* SECTION 8 */}
      <Text style={styles.heading}>Why Play Psisense?</Text>
      <Text style={styles.paragraph}>
        Psisense helps you train perceptual intuition, sharpen focus, and
        explore the limits of your mind in a structured and entertaining way.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
  },
  inner: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: "#acf92c",
    fontWeight: "bold",
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    color: "#acf92c",
    marginTop: 20,
    marginBottom: 6,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 22,
  },
});
