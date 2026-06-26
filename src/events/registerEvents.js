import { uiStore } from "../store/uiStore";
import { renderApp } from "../app";

import { toggleTheme } from "../utils/theme";

import { debounce } from "../utils/debounce";

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

  const handleSearch = debounce((value) => {
    uiStore.userSearch = value;

    uiStore.currentUserPage = 1;

    renderApp();

    const newSearchInput = document.querySelector("#user-search");

    if (newSearchInput) {
      newSearchInput.focus();

      newSearchInput.setSelectionRange(value.length, value.length);
    }
  }, 300);

  const searchInput = document.querySelector("#user-search");
  if (searchInput)
    searchInput.addEventListener("input", (event) => {
      handleSearch(event.target.value);
    });

  const sortButtons = document.querySelectorAll(".sort-button");

  sortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const field = button.dataset.sortField;

      if (uiStore.userSortField === field) {
        uiStore.userSortDirection =
          uiStore.userSortDirection === "asc" ? "desc" : "asc";
      } else {
        uiStore.userSortField = field;
        uiStore.userSortDirection = "asc";
      }

      renderApp();
    });
  });

  const prevPage = document.querySelector("#prev-page");

  if (prevPage) {
    prevPage.addEventListener("click", () => {
      if (uiStore.currentUserPage > 1) {
        uiStore.currentUserPage--;

        renderApp();
      }
    });
  }

  const nextPage = document.querySelector("#next-page");

  if (nextPage) {
    nextPage.addEventListener("click", () => {
      if (uiStore.currentUserPage < uiStore.totalUserPages) {
        uiStore.currentUserPage++;

        renderApp();
      }
    });
  }
}
