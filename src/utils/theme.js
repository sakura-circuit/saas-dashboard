import { themeStore } from "../store/themeStore";

export function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    themeStore.theme = savedTheme;
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    themeStore.theme = prefersDark ? "dark" : "light";
  }

  applyTheme();
}

export function applyTheme() {
  document.documentElement.classList.toggle(
    "dark",
    themeStore.theme === "dark",
  );
}

export function toggleTheme() {
  themeStore.theme = themeStore.theme === "light" ? "dark" : "light";

  console.log("themeStore.theme", themeStore.theme);

  localStorage.setItem("theme", themeStore.theme);

  applyTheme();
}
