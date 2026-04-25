import { saveSession } from "../saveSession";

/*
MASTER SESSION RECORDER
Called AFTER Mirror Analysis
*/
export async function recordSession({
  result,
  targetId,
  userMeta
}) {
  try {

    const session = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),

      targetId: targetId ?? "unknown",

      // CORE SCORE
      confidence: result?.confidence ?? 0,

      // USER META
      country: userMeta?.country ?? "Unknown",
      sex: userMeta?.sex ?? "Unknown",
      ageGroup: userMeta?.ageGroup ?? "Unknown"
    };

    await saveSession(session);

  } catch (e) {
    console.log("SESSION RECORD ERROR:", e);
  }
}