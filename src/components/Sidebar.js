import { navigation } from "../data/navigation";

export function Sidebar() {
  const links = navigation
    .map(
      (item) => `
            <li>
                <a
                    href="${item.href}"
                    class="
                        block
                        px-4
                        py-2
                        rounded-lg

                        hover:bg-slate-100

                        focus:outline-none
                        focus:ring-2
                      focus:ring-blue-200
                    "
                >
                    ${item.label}
                </a>
            </li>
        `,
    )
    .join("");

  return `
        <aside
            class="
                hidden
                lg:flex

                lg:w-64

                flex-col

                bg-white
                border-r
                border-slate-200
            "
        >

            <div class="p-6 border-b border-slate-200">
                <h2 class="text-xl font-bold">
                    SaaS Dashboard
                </h2>
            </div>

            <nav aria-label="Main navigation" class="p-4">
                <ul class="space-y-2">

                    ${links}

                </ul>
            </nav>
        </aside>
    `;
}
