import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "psisense_user_profile";

export async function getProfile() {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : null;
}

export async function clearProfile() {
  await AsyncStorage.removeItem(KEY);
}