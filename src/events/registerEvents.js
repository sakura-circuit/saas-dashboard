import { uiStore } from "../store/uiStore";
import { renderApp } from "../app";

import { toggleTheme } from "../utils/theme";

export function registerEvents() {
  const menuButton = document.querySelector("#menu-toggle");

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      uiStore.mobileMenuOpen = !uiStore.mobileMenuOpen;

      renderApp();
    });
  }

  const themeButtons = document.querySelectorAll(".theme-toggle");

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      toggleTheme();
      renderApp();
    });
  });

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      uiStore.currentPage = event.target.dataset.page;

      uiStore.mobileMenuOpen = false;

      renderApp();
    });
  });

  const searchInput = document.querySelector("#user-search");

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      uiStore.userSearch = event.target.value;

      renderApp();

      const newSearchInput = document.querySelector("#user-search");

      if (newSearchInput) {
        newSearchInput.focus();

        newSearchInput.setSelectionRange(
          uiStore.userSearch.length,
          uiStore.userSearch.length,
        );
      }
    });
  }
}
