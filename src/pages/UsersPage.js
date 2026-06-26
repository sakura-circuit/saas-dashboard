import { users } from "../data/users";
import { Table } from "../components/Table";
import { Input } from "../components/Input.js";
import { uiStore } from "../store/uiStore.js";

import { DashboardLayout } from "../layouts/DashboardLayout.js";

import { EmptyState } from "../components/EmptyState.js";

export function UsersPage() {
  const filteredUsers = users.filter((user) => {
    const query = uiStore.userSearch.trim().toLowerCase();

    if (!query) {
      return true;
    }

    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      String(user.id) === query
    );
  });

  const sortedUsers = [...filteredUsers];

  sortedUsers.sort((a, b) => {
    const field = uiStore.userSortField;
    const direction = uiStore.userSortDirection;

    if (a[field] < b[field]) {
      return direction === "asc" ? -1 : 1;
    }

    if (a[field] > b[field]) {
      return direction === "asc" ? 1 : -1;
    }

    return 0;
  });

  const rows = sortedUsers.map((user) => [user.id, user.name, user.email]);

  return DashboardLayout(`
    <div class="space-y-6">

        <h1 class="text-4xl font-bold">
            Users
        </h1>

        ${Input({
          id: "user-search",
          placeholder: "Search users...",
          value: uiStore.userSearch,
        })}

        <p
          class="
            text-sm
            text-slate-500
          "
        >
          ${filteredUsers.length}
          users found
        </p>

        ${
          rows.length
            ? Table({
                headers: [
                  {
                    label: "ID",
                    field: "id",
                  },
                  {
                    label: "Name",
                    field: "name",
                  },
                  {
                    label: "Email",
                    field: "email",
                  },
                ],
                rows,
              })
            : EmptyState({
                title: "No users found",
                description: "Try adjusting your search criteria.",
              })
        }
    </div>
  `);
}
