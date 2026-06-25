import { users } from "../data/users";
import { Table } from "../components/Table";

import { DashboardLayout } from "../layouts/DashboardLayout.js";

export function UsersPage() {
  const rows = users.map((user) => [user.id, user.name, user.email]);

  return DashboardLayout(`
    <div class="space-y-6">

        <h1 class="text-4xl font-bold">
            Users
        </h1>

        ${Table({
          headers: ["ID", "Name", "Email"],
          rows,
        })}
    </div>
  `);
}
