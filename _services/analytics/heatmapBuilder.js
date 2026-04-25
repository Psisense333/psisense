import { COUNTRY_COORDS } from "../../data/countryCoords";

export function buildMapPoints(sessions) {
  const map = {};

  sessions.forEach((s) => {
    const country = s.profile?.country;
    if (!country || !COUNTRY_COORDS[country]) return;

    if (!map[country]) map[country] = [];

    const score = s.result?.confidence || 0;
    map[country].push(score);
  });

  const points = [];

  Object.entries(map).forEach(([country, scores]) => {
    const avg =
      scores.reduce((a, b) => a + b, 0) / scores.length;

    const coord = COUNTRY_COORDS[country];

    // normalize to screen (0–1)
    const x = (coord.lng + 180) / 360;
    const y = (90 - coord.lat) / 180;

    points.push({
      x,
      y,
      intensity: avg / 100,
    });
  });

  return points;
}