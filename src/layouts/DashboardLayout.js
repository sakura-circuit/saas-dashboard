import { Navbar } from "../components/Navbar.js";
import { Sidebar } from "../components/Sidebar.js";

export function DashboardLayout(content) {
  return `
        <div class="min-h-screen bg-slate-100">

            ${Navbar()}

            <div class="flex">

                ${Sidebar()}

                <main class="flex-1 p-6">
                    ${content}
                </main>
            </div>
            
        </div>
    `;
}
