import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "PSISENSE_SESSION_HISTORY";

export async function saveSession(session) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const sessions = existing ? JSON.parse(existing) : [];

    sessions.push(session);

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));

    return true;
  } catch (e) {
    console.log("SaveSession error:", e);
    return false;
  }
}

export async function getSessions() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export async function clearSessions() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}