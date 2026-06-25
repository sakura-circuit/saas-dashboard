import { DashboardPage } from "./pages/DashboardPage";
import { UsersPage } from "./pages/UsersPage";

import { uiStore } from "./store/uiStore";

import { registerEvents } from "./events/registerEvents";

export function renderApp() {
  document.querySelector("#app").innerHTML = getCurrentPage();

  registerEvents();
}

function getCurrentPage() {
  switch (uiStore.currentPage) {
    case "users":
      return UsersPage();

    default:
      return DashboardPage();
  }
}
