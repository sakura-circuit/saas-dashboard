import { themeStore } from "../store/themeStore";

export function ThemeToggle() {
  const icon = themeStore.theme === "dark" ? "☀️" : "🌙";

  return `
    <button 
        class="theme-toggle"
        aria-label="
            Switch to ${themeStore.theme === "dark" ? "light" : "dark"} mode
        "
        class="
            p-2
            rounded-lg

            hover:bg-slate-100
            dark:hover:bg-slate-700

            focus:outline-none
            focus:ring-2
            focus:ring-blue-500

            cursor-pointer
        "
    >
        ${icon}
    </button>
  `;
}
