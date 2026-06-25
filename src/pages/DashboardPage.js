import { Card } from "../components/Card";
import { DashboardLayout } from "../layouts/DashboardLayout";

export function DashboardPage() {
  return DashboardLayout(`
        <h1 class="text-4xl font-bold mb-8">
            Dashboard
        </h1>

        <div
            class="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
            "
        >

            ${Card(`
                <p class="text-slate-500">
                    Revenue
                </p>

                <h2 class="text-3xl font-bold mt-2">
                    $45,000
                </h2>
                `)}

            ${Card(`
                <p class="text-slate-500">
                    Users
                </p>

                <h2 class="text-3xl font-bold mt-2">
                    12,400
                </h2>
                `)}

            ${Card(`
                <p class="text-slate-500">
                    Orders
                </p>

                <h2 class="text-3xl font-bold mt-2">
                    840
                </h2>
                `)}

            ${Card(`
                <p class="text-slate-500">
                    Growth
                </p>

                <h2 class="text-3xl font-bold mt-2">
                    24%
                </h2>
                `)}

        </div>
    `);
}
