// ============================================
// PSISENSE SESSION LOGGER SYSTEM
// Local storage engine (Hybrid-ready)
// ============================================

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "psisense_sessions";


// ============================================
// SAVE SESSION
// ============================================

export async function saveSession({
  confidence,
  focus,
  cognitive,
  sensory,
  reflection,
  country,
  nationality,
  sex,
  ageGroup
}) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const sessions = existing ? JSON.parse(existing) : [];

    const newSession = {
      id: Date.now().toString(),
      timestamp: Date.now(),

      result: {
        confidence,
        focus,
        cognitive,
        sensory,
        reflection
      },

      profile: {
        country,
        nationality,
        sex,
        ageGroup
      }
    };

    sessions.unshift(newSession);

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(sessions)
    );

    return true;
  } catch (e) {
    console.error("Save session error:", e);
    return false;
  }
}



// ============================================
// GET ALL SESSIONS
// ============================================

export async function getSessions() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Load sessions error:", e);
    return [];
  }
}



// ============================================
// CLEAR ALL SESSIONS
// ============================================

export async function clearSessions() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    console.error("Clear sessions error:", e);
    return false;
  }
}



// ============================================
// FILTER BY COUNTRY
// ============================================

export async function getSessionsByCountry(code) {
  const sessions = await getSessions();
  return sessions.filter(s => s.profile.country === code);
}



// ============================================
// FILTER BY SEX
// ============================================

export async function getSessionsBySex(sex) {
  const sessions = await getSessions();
  return sessions.filter(s => s.profile.sex === sex);
}



// ============================================
// FILTER BY AGE GROUP
// ============================================

export async function getSessionsByAge(ageGroup) {
  const sessions = await getSessions();
  return sessions.filter(s => s.profile.ageGroup === ageGroup);
}



// ============================================
// FILTER BY NATIONALITY
// ============================================

export async function getSessionsByNationality(nat) {
  const sessions = await getSessions();
  return sessions.filter(s => s.profile.nationality === nat);
}



// ============================================
// GLOBAL STATS ENGINE
// ============================================

export async function getGlobalStats() {
  const sessions = await getSessions();

  if (!sessions.length) {
    return {
      total: 0,
      avgConfidence: 0,
      best: 0,
      worst: 0
    };
  }

  const scores = sessions.map(s => s.result.confidence);

  const total = sessions.length;
  const best = Math.max(...scores);
  const worst = Math.min(...scores);
  const avg =
    scores.reduce((a, b) => a + b, 0) / scores.length;

  return {
    total,
    best,
    worst,
    avgConfidence: Math.round(avg)
  };
}



// ============================================
// COUNTRY HEATMAP DATA BUILDER
// ============================================

export async function getCountryHeatmapData() {
  const sessions = await getSessions();

  const map = {};

  sessions.forEach(s => {
    const c = s.profile.country || "XX";

    if (!map[c]) {
      map[c] = {
        count: 0,
        total: 0
      };
    }

    map[c].count += 1;
    map[c].total += s.result.confidence;
  });

  const result = [];

  Object.keys(map).forEach(code => {
    result.push({
      country: code,
      sessions: map[code].count,
      avgConfidence: Math.round(
        map[code].total / map[code].count
      )
    });
  });

  return result;
}