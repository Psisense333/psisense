import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function FAQScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.inner}>
      <Text style={styles.title}>Frequently Asked Questions</Text>

      {/* Question 1 */}
      <Text style={styles.question}>What is Psisense?</Text>
      <Text style={styles.answer}>
        Psisense is a training tool designed to help you practice intuitive 
        perception and remote-viewing skills. You receive hidden targets 
        connected to random ID numbers, attempt to describe impressions, 
        and then reveal the real target for comparison.
      </Text>

      {/* Question 2 */}
      <Text style={styles.question}>What is a “target”?</Text>
      <Text style={styles.answer}>
        A target is an image, photograph, symbol, or object. It remains hidden 
        until the end of the session. Your goal is to perceive the target 
        using intuitive methods before revealing it.
      </Text>

      {/* Question 3 */}
      <Text style={styles.question}>Why are targets linked to random numbers?</Text>
      <Text style={styles.answer}>
        Target numbers act as neutral identifiers. They do not contain clues 
        or patterns. Their purpose is simply to give the mind something to 
        “focus on” before intuitive impressions arise.
      </Text>

      {/* Question 4 */}
      <Text style={styles.question}>How do I know if my impressions are correct?</Text>
      <Text style={styles.answer}>
        After focusing on the target number and writing or drawing your 
        impressions, tap “Reveal Target.” Compare what you perceived with the 
        actual image. Over time you’ll notice patterns in your accuracy.
      </Text>

      {/* Question 5 */}
      <Text style={styles.question}>Is this scientifically proven?</Text>
      <Text style={styles.answer}>
        Remote viewing has been studied in scientific and parapsychological
        research programs. While results are debated, many users report
        measurable increases in intuitive accuracy through practice.
      </Text>

      {/* Question 6 */}
      <Text style={styles.question}>Do I need to believe in anything?</Text>
      <Text style={styles.answer}>
        No beliefs are required. Psisense is based on observation, perception, 
        and practice. Skeptical, curious, and intuitive users all benefit from 
        using the app.
      </Text>

      {/* Question 7 */}
      <Text style={styles.question}>How often should I practice?</Text>
      <Text style={styles.answer}>
        Short, consistent sessions give the best results. Many users practice 
        1–3 targets per day to maintain clarity and accuracy without mental 
        fatigue.
      </Text>

      {/* Question 8 */}
      <Text style={styles.question}>Why do impressions sometimes feel random?</Text>
      <Text style={styles.answer}>
        Early impressions often come through subtle sensory channels that 
        don’t feel like normal thinking. This is normal. With practice, you’ll 
        learn to distinguish intuitive signals from imagination.
      </Text>

      {/* Question 9 */}
      <Text style={styles.question}>Why do I sometimes get the target completely wrong?</Text>
      <Text style={styles.answer}>
        Even experienced remote viewers have incorrect sessions. The goal is 
        not perfection but increased accuracy over time. Consistency and 
        a calm mental state strongly influence results.
      </Text>

      {/* Question 10 */}
      <Text style={styles.question}>Can I improve my psychic or intuitive abilities?</Text>
      <Text style={styles.answer}>
        Yes. Most users show measurable improvement with regular practice. 
        Psisense provides structured training that strengthens intuitive 
        perception similar to how exercise strengthens physical skills.
      </Text>

      {/* Question 11 */}
      <Text style={styles.question}>Will there be more advanced targets?</Text>
      <Text style={styles.answer}>
        Yes. Future updates will include Premium targets, complex sessions, 
        scoring systems, and user statistics to track your progress.
      </Text>

      {/* Question 12 */}
      <Text style={styles.question}>Is my data private?</Text>
      <Text style={styles.answer}>
        Yes. User data and personal notes are not shared. (When login and 
        cloud features are added, details will be included inside the Privacy 
        Policy and Options page.)
      </Text>
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
  },
  title: {
    fontSize: 28,
    color: "#acf92c",
    fontWeight: "bold",
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    color: "#acf92c",
    marginTop: 20,
    marginBottom: 6,
    fontWeight: "bold",
  },
  answer: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 22,
  },
});
