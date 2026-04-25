import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfile } from "./profileStore";

const KEY = "psisense_sessions";

/*
SAVE SESSION
*/
export async function saveSession({ text, result, targetId }) {
  try {

    const profile = await getProfile();

    const newSession = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      text,
      result,
      targetId,
      profile
    };

    const existing = await AsyncStorage.getItem(KEY);
    const sessions = existing ? JSON.parse(existing) : [];

    sessions.unshift(newSession);

    await AsyncStorage.setItem(KEY, JSON.stringify(sessions));

  } catch (err) {
    console.log("Session save error:", err);
  }
}


/*
GET ALL SESSIONS
*/
export async function getSessions() {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}


/*
CLEAR SESSIONS
*/
export async function clearSessions() {
  await AsyncStorage.removeItem(KEY);
}