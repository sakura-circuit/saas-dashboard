import { navigation } from "../data/navigation";

export function MobileMenu() {
  const links = navigation
    .map(
      (item) => `
            <li>
                <a
                    href="${item.href}"
                    class="
                        block
                        px-4
                        py-3
                        rounded-lg
                        hover:bg-slate-100
                    "
                >
                    ${item.label}
                </a>
            </li>            
        `,
    )
    .join("");

  return `
        <div
            id="mobile-menu"
            class="
                lg:hidden
                bg-white
                border-b
                border-slate-200

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
