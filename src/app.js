import { DashboardPage } from "./pages/DashboardPage";
import { registerEvents } from "./events/registerEvents";

export function renderApp() {
  document.querySelector("#app").innerHTML = DashboardPage();

  registerEvents();
}
