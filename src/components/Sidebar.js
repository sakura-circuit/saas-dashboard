import { navigation } from "../data/navigation";
import { uiStore } from "../store/uiStore";
import { ThemeToggle } from "./ThemeToggle";

export function Sidebar() {
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
                        py-2
                        rounded-lg

                        hover:bg-slate-100
                        dark:hover:bg-slate-700

                        focus:outline-none
                        focus:ring-2
                      focus:ring-blue-200
                    "
                >
                    ${item.label}
                </a>
            </li>
        `;
    })
    .join("");

  return `
        <aside
            class="
                hidden
                lg:flex

                lg:w-64

                flex-col

                bg-white
                dark:bg-slate-800

                border-r
                border-slate-200
                dark:border-slate-700
            "
        >

            <div class="
                    p-6
                    border-b
                    border-slate-200
                    dark:border-slate-700

                    flex
                    items-center
                    justify-between">
                <h2 class="text-xl font-bold">
                    SaaS Dashboard
                </h2>

                 ${ThemeToggle()}
            </div>

            <nav aria-label="Main navigation" class="p-4">
                <ul class="space-y-2">

                    ${links}

                </ul>
            </nav>
        </aside>
    `;
}
