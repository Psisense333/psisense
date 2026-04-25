import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // --- Containers ---
  container: {
    flex: 1,
    backgroundColor: "#161616",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#161616",
    padding: 20,
  },

  // --- Titles ---
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#acf92c",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },

  // --- Buttons ---
  button: {
    backgroundColor: "#acf92c",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    width: "70%",
  },
  buttonSecondary: {
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    width: "70%",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  buttonTextSecondary: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },

  // --- Inputs ---
  input: {
    width: "100%",
    backgroundColor: "#2a2a2a",
    color: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    width: "100%",
    backgroundColor: "#2a2a2a",
    color: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    height: 120,
    textAlignVertical: "top",
  },

  // --- Text ---
  text: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  score: {
    fontSize: 50,
    color: "#acf92c",
    marginVertical: 20,
    textAlign: "center",
  },

  // --- Images ---
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
    borderRadius: 10,
  },
  imageSmall: {
    width: 150,
    height: 150,
    marginVertical: 10,
    borderRadius: 8,
  },

  // --- Other ---
  separator: {
    height: 1,
    backgroundColor: "#333",
    width: "100%",
    marginVertical: 15,
  },
});
