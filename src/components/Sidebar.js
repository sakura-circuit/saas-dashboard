export function Sidebar() {
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

            <nav class="p-4">
                <ul class="space-y-2">

                    <li>
                        <a
                            href="#"
                            class="
                                block
                                px-4
                                py-2
                                rounded-lg
                                hover:bg-slate-100
                            "
                        >
                            Dashboard
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            class="
                                block
                                px-4
                                py-2
                                rounded-lg
                                hover:bg-slate-100
                            "
                        >
                            Users
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            class="
                                block
                                px-4
                                py-2
                                rounded-lg
                                hover:bg-slate-100

                            "
                        >
                            Reports
                        </a>
                    </li>

                </ul>
            </nav>
        </aside>
    `;
}
