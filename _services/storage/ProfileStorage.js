// app/src/services/storage/ProfileStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "PSISENSE_USER_PROFILE";

export async function saveProfile(profile) {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    return true;
  } catch (e) {
    console.log("SaveProfile error:", e);
    return false;
  }
}

export async function getProfile() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.log("GetProfile error:", e);
    return null;
  }
}

export async function clearProfile() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.log("ClearProfile error:", e);
  }
}