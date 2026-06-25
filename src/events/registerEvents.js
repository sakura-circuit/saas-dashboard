import { uiStore } from "../store/uiStore";
import { renderApp } from "../app";

export function registerEvents() {
  const menuButton = document.querySelector("#menu-toggle");

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      uiStore.mobileMenuOpen = !uiStore.mobileMenuOpen;

      renderApp();
    });
  }
}
