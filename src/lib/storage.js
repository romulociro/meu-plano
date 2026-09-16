const KEY = "plano-romulo:checkins:v1";
const PREFS_KEY = "plano-romulo:prefs:v1";

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadCheckins() {
  const data = readJson(KEY, {});
  return data && typeof data === "object" ? data : {};
}

export function saveCheckins(data) {
  writeJson(KEY, data);
}

export function getDay(dateKey) {
  return loadCheckins()[dateKey] ?? {};
}

export function upsertMeal(dateKey, mealId, entry) {
  const all = loadCheckins();
  const day = { ...(all[dateKey] ?? {}) };
  day[mealId] = { ...entry, updatedAt: new Date().toISOString() };
  all[dateKey] = day;
  saveCheckins(all);
  return day[mealId];
}

export function clearMeal(dateKey, mealId) {
  const all = loadCheckins();
  const day = { ...(all[dateKey] ?? {}) };
  delete day[mealId];
  if (Object.keys(day).length === 0) {
    delete all[dateKey];
  } else {
    all[dateKey] = day;
  }
  saveCheckins(all);
}

export function loadPrefs() {
  return {
    selectedOptions: {},
    ...readJson(PREFS_KEY, {}),
  };
}

export function saveSelectedOption(mealId, optionId) {
  const prefs = loadPrefs();
  prefs.selectedOptions = { ...prefs.selectedOptions, [mealId]: optionId };
  writeJson(PREFS_KEY, prefs);
}

export function getSelectedOption(mealId, fallbackId) {
  return loadPrefs().selectedOptions?.[mealId] ?? fallbackId;
}
