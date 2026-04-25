import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_WORDS_KEY = "PSISENSE_USER_WORDS";
let learnedWords = new Set();

async function loadUserWords() {
  try {
    const data = await AsyncStorage.getItem(USER_WORDS_KEY);
    if (data) {
      learnedWords = new Set(JSON.parse(data));
    }
  } catch {}
}

async function saveUserWords() {
  try {
    await AsyncStorage.setItem(
      USER_WORDS_KEY,
      JSON.stringify([...learnedWords])
    );
  } catch {}
}

const CLUSTERS = {
  visual: [
    ["triangle","triangular","pyramid","three","angled"],
    ["square","box","cube","rectangular"],
    ["circle","round","sphere","ball"],
    ["line","edge","border","outline"],
    ["frame","structure","form","shape"],
    ["upright","vertical","standing"],
    ["diagonal","tilted","angled"],
    ["color","red","blue","green","yellow","white","black"],
    ["shadow","dark","bright","light"],
    ["pattern","texture","surface"]
  ],
  movement: [
    ["move","motion","shift"],
    ["spin","rotate","turn"],
    ["flow","drift"],
    ["fall","drop"],
    ["rise","lift"],
    ["vibrate","shake"]
  ],
  emotional: [
    ["calm","peaceful"],
    ["tense","stress"],
    ["heavy","pressure"],
    ["warm","comfort"],
    ["cold","empty"]
  ],
  abstract: [
    ["symbol","meaning"],
    ["space","void"],
    ["presence","energy"],
    ["mystery","unknown"]
  ]
};

const STOP_WORDS = [
  "a","an","the","of","to","is","it","was","were",
  "maybe","perhaps","kind","sort","like","seems"
];

function clean(text = "") {
  return text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/)
    .filter(w => w && !STOP_WORDS.includes(w));
}

function root(word) {
  return word.replace(/(ing|ed|ly|al|s)$/,"");
}

function clusterMatch(word, cluster) {
  word = root(word);

  for (const keyword of cluster) {
    const k = root(keyword);
    if (word === k) return true;
    if (word.startsWith(k)) return true;
    if (k.startsWith(word)) return true;
  }

  return false;
}

function countCategory(words, clusters) {
  let matches = 0;

  clusters.forEach(cluster => {
    let found = false;

    words.forEach(word => {
      if (!found && clusterMatch(word, cluster)) found = true;
    });

    if (found) matches++;
  });

  return matches;
}

function learnNewWords(words) {
  words.forEach(w => {
    if (w.length > 4) learnedWords.add(w);
  });

  saveUserWords();
}

export function analyzeDescription(text) {
  const words = clean(text);
  learnNewWords(words);

  const visual = countCategory(words, CLUSTERS.visual);
  const movement = countCategory(words, CLUSTERS.movement);
  const emotional = countCategory(words, CLUSTERS.emotional);
  const abstract = countCategory(words, CLUSTERS.abstract);

  const totalSignals = visual + movement + emotional + abstract;

  const clarity = Math.min(10, visual * 2);
  const stability = Math.min(10, visual + movement);
  const signal = Math.min(10, totalSignals);

  const richness = Math.min(10, words.length / 2);

  const confidence = Math.min(
    95,
    Math.round(
      clarity * 4 +
      stability * 3 +
      richness * 2
    )
  );

  let perception = "Perception moved without clear focus.";

  const max = Math.max(visual, movement, emotional, abstract);

  if (max === visual)
    perception = "Your attention focused on structural and visual signals.";
  else if (max === movement)
    perception = "Your attention followed motion patterns.";
  else if (max === emotional)
    perception = "Your attention detected emotional atmosphere.";
  else if (max === abstract)
    perception = "Your attention focused on symbolic meaning.";

  let cognitive = "Exploratory perception style.";

  if (words.length > 25)
    cognitive = "Highly detailed analytical description.";
  else if (words.length > 12)
    cognitive = "Balanced analytical and intuitive perception.";
  else if (words.length > 5)
    cognitive = "Minimal but focused perception.";

  let sensory = "Balanced sensory perception.";

  const perceptual = visual + movement;
  const intuitive = emotional + abstract;

  if (perceptual > intuitive)
    sensory = "Visual-spatial sensing dominated perception.";
  else if (intuitive > perceptual)
    sensory = "Internal intuitive sensing dominated perception.";

  let reflection = "Mind attentive to structural signals.";

  if (totalSignals >= 6)
    reflection = "Perception integrated multiple signal channels.";
  else if (totalSignals <= 2)
    reflection = "Signal still forming — perception narrow.";

  return {
    confidence,
    clarity,
    stability,
    signal,
    perception,
    cognitive,
    sensory,
    reflection,
    stats: {
      visual,
      movement,
      emotional,
      abstract,
      totalSignals,
      wordCount: words.length
    }
  };
}