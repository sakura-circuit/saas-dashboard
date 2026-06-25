export function Navbar() {
  return `
        <header
            class="
                lg:hidden

                bg-white
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

                <button
                    aria-label="Open menu"
                    class="
                        p-2
                        rounded-lg
                        hover:bg-slate-100
                    "
                >
                    ☰
                </button>

            </div>
        </header>
    `;
}
