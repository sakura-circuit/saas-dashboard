import { Card } from "./Card.js";

export function StatCard({ title, value }) {
  return Card(`
        <p class="text-slate-500">
            ${title}
        </p>

        <h2 class="text-3xl font-bold mt-2">
            ${value}
        </h2>
        `);
}
