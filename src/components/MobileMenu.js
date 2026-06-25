import { navigation } from "../data/navigation";
import { uiStore } from "../store/uiStore";

export function MobileMenu() {
  const links = navigation
    .map((item) => {
      const activeClass =
        uiStore.currentPage === item.page
          ? "bg-slate-200 dark:bg-slate-700"
          : "";
      return `
            <li>
                <a
                    href="#"
                    data-page="${item.page}"
                    class="
                        nav-link
                        ${activeClass}

                        block
                        px-4
                        py-3
                        rounded-lg
                        
                        hover:bg-slate-100
                        dark:hover:bg-slate-700
                    "
                >
                    ${item.label}
                </a>
            </li>            
        `;
    })
    .join("");

  return `
        <div
            id="mobile-menu"
            class="
                lg:hidden
                bg-white
                dark:bg-slate-800
                

                slide-down
            "
        >
            <nav 
                aria-label="Mobile navigation"
                class="p-4"
            >
                <ul class="space-y-2">
                    ${links}
                </ul>
            </nav>
        </div>
    `;
}
