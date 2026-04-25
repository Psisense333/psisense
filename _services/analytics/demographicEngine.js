import { getSessions } from "../saveSession";

/*
======================================
AGE GROUP CLASSIFIER
======================================
*/
function getAgeGroup(age) {
  if (age === undefined || age === null) return "Unknown";

  const n = Number(age);
  if (n <= 10) return "0-10";
  if (n <= 15) return "11-15";
  if (n <= 20) return "16-20";
  if (n <= 25) return "21-25";
  if (n <= 35) return "26-35";
  if (n <= 50) return "36-50";
  if (n <= 70) return "51-70";
  return "71+";
}

/*
======================================
SAFE GROUP COUNTER
======================================
*/
function increment(container, key) {
  const label = key || "Unknown";

  if (!container[label]) {
    container[label] = {
      sessions: 0,
      totalScore: 0,
      avgScore: 0,
    };
  }

  container[label].sessions += 1;
}

/*
======================================
SCORE EXTRACTOR
======================================
*/
function extractScore(result) {
  if (!result) return 0;

  if (typeof result.confidence === "number") return result.confidence;
  if (typeof result.score === "number") return result.score;
  if (typeof result.percent === "number") return result.percent;

  return 0;
}

/*
======================================
CORE ANALYTICS ENGINE
======================================
*/
export async function analyzeDemographics() {
  const sessions = await getSessions();

  const stats = {
    totalSessions: sessions.length,
    country: {},
    nationality: {},
    sex: {},
    ageGroup: {},
  };

  sessions.forEach((session) => {
    const profile = session.profile || {};
    const score = extractScore(session.result);

    const country = profile.country || "Unknown";
    const nationality = profile.nationality || "Unknown";
    const sex = profile.sex || "Unknown";
    const ageGroup = getAgeGroup(profile.age);

    increment(stats.country, country);
    stats.country[country].totalScore += score;

    increment(stats.nationality, nationality);
    stats.nationality[nationality].totalScore += score;

    increment(stats.sex, sex);
    stats.sex[sex].totalScore += score;

    increment(stats.ageGroup, ageGroup);
    stats.ageGroup[ageGroup].totalScore += score;
  });

  function finalize(section) {
    Object.keys(section).forEach((key) => {
      const g = section[key];
      g.avgScore = g.sessions > 0
        ? Math.round(g.totalScore / g.sessions)
        : 0;
    });
  }

  finalize(stats.country);
  finalize(stats.nationality);
  finalize(stats.sex);
  finalize(stats.ageGroup);

  return stats;
}

/*
======================================
TOP PERFORMERS
======================================
*/
export async function getTopDemographic(type, limit = 5) {
  const data = await analyzeDemographics();
  const group = data[type];

  if (!group) return [];

  return Object.entries(group)
    .map(([label, val]) => ({
      label,
      avgScore: val.avgScore,
      sessions: val.sessions,
    }))
    .sort((a, b) => b.avgScore - a.avgScore)
    .slice(0, limit);
}

/*
======================================
HEATMAP MATRIX
======================================
*/
export async function buildHeatmapMatrix(xAxis, yAxis) {
  const sessions = await getSessions();
  const matrix = {};

  sessions.forEach((s) => {
    const profile = s.profile || {};
    const score = extractScore(s.result);

    const x = profile[xAxis] || "Unknown";
    const y = profile[yAxis] || "Unknown";

    if (!matrix[y]) matrix[y] = {};
    if (!matrix[y][x]) matrix[y][x] = { total: 0, count: 0 };

    matrix[y][x].total += score;
    matrix[y][x].count += 1;
  });

  Object.keys(matrix).forEach((y) => {
    Object.keys(matrix[y]).forEach((x) => {
      const c = matrix[y][x];
      c.avg = Math.round(c.total / c.count);
    });
  });

  return matrix;
}

/*
======================================
GLOBAL INSIGHTS
======================================
*/
export async function generateGlobalInsights() {
  const data = await analyzeDemographics();

  function best(group) {
    return Object.entries(group).sort(
      (a, b) => b[1].avgScore - a[1].avgScore
    )[0];
  }

  const bestCountry = best(data.country);
  const bestSex = best(data.sex);
  const bestAge = best(data.ageGroup);

  return {
    strongestCountry: bestCountry?.[0] || null,
    strongestSex: bestSex?.[0] || null,
    strongestAgeGroup: bestAge?.[0] || null,
    totalSessions: data.totalSessions,
  };
}