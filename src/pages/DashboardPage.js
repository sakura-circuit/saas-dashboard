import { StatCard } from "../components/StatCard";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { dashboardStats } from "../data/dashboardStats";

export function DashboardPage() {
  const statsMarkup = dashboardStats.map((stat) => StatCard(stat)).join("");

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

            ${statsMarkup}

        </div>
    `);
}
