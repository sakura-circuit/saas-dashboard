import { uiStore } from "../store/uiStore";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return `
        <header
            class="
                lg:hidden

                bg-white
                dark:bg-slate-800
                
                border-b
                border-slate-200

                px-4
                py-4
            "
        >

            <div class="flex items-center justify-between">

                <h1 class="font-bold text-x1">
                    SaaS Dashboard
                </h1>

                <div class="flex items-center gap-2">
                   
                    ${ThemeToggle()}

                    <button
                        id="menu-toggle"
                        aria-label="Open menu"
                        aria-expanded="${uiStore.mobileMenuOpen}"
                        class="
                            p-2
                            rounded-lg
                            hover:bg-slate-100
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            cursor-pointer
                        "
                    >
                        ☰
                    </button>

                </div>

            </div>
        </header>
    `;
}
