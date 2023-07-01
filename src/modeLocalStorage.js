const localStorageKey = "mode";

export const saveModeToLocalStorage = (mode) =>
  localStorage.setItem(localStorageKey, JSON.stringify(mode));

export const getModeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || "light";
