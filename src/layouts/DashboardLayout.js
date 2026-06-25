import { Navbar } from "../components/Navbar.js";
import { Sidebar } from "../components/Sidebar.js";
import { MobileMenu } from "../components/MobileMenu.js";
import { uiStore } from "../store/uiStore.js";

export function DashboardLayout(content) {
  return `
        <div class="
            min-h-screen
            bg-slate-100
            dark:bg-slate-900">

            ${Navbar()}

            ${uiStore.mobileMenuOpen ? MobileMenu() : ""}

            <div class="flex">

                ${Sidebar()}

                <main 
                    id="main-content" 
                    class="flex-1 p-6">
                    ${content}
                </main>
            </div>
            
        </div>
    `;
}
