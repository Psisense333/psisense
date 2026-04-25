import { getSessions } from "../saveSession";

export async function buildStats() {
  const sessions = await getSessions();

  if (!sessions || sessions.length === 0) {
    return null;
  }

  const byCountry = {};
  const bySex = {};
  const byAge = {};

  sessions.forEach((s) => {
    const country = s.profile?.country || "Unknown";
    const sex = s.profile?.sex || "Unknown";
    const age = s.profile?.ageGroup || "Unknown";
    const score = s.result?.confidence || 0;

    if (!byCountry[country]) {
      byCountry[country] = { total: 0, score: 0 };
    }
    byCountry[country].total++;
    byCountry[country].score += score;

    if (!bySex[sex]) {
      bySex[sex] = { total: 0, score: 0 };
    }
    bySex[sex].total++;
    bySex[sex].score += score;

    if (!byAge[age]) {
      byAge[age] = { total: 0, score: 0 };
    }
    byAge[age].total++;
    byAge[age].score += score;
  });

  function average(obj) {
    const result = {};
    Object.keys(obj).forEach((k) => {
      result[k] = Math.round(obj[k].score / obj[k].total);
    });
    return result;
  }

  return {
    sessionsCount: sessions.length,
    countries: average(byCountry),
    sex: average(bySex),
    age: average(byAge),
  };
}