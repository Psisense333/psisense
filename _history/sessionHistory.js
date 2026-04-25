import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "psisense_session_history";


// ---------------------------
// LOAD HISTORY
// ---------------------------
export async function loadHistory() {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}


// ---------------------------
// SAVE SESSION
// ---------------------------
export async function saveSession(session) {
  try {
    const history = await loadHistory();

    history.unshift({
      id: Date.now(),
      date: new Date().toISOString(),
      ...session
    });

    await AsyncStorage.setItem(KEY, JSON.stringify(history));
  } catch (err) {
    console.log("Save history error:", err);
  }
}


// ---------------------------
// CLEAR HISTORY
// ---------------------------
export async function clearHistory() {
  await AsyncStorage.removeItem(KEY);
}


// ---------------------------
// TREND CALCULATION
// ---------------------------
export function calculateTrend(history) {
  if (history.length < 2) return "stable";

  const recent = history.slice(0, 5);
  const older = history.slice(5, 10);

  const avg = arr =>
    arr.reduce((s, x) => s + (x.score || 0), 0) / arr.length;

  if (!older.length) return "stable";

  const diff = avg(recent) - avg(older);

  if (diff > 5) return "improving";
  if (diff < -5) return "declining";
  return "stable";
}
