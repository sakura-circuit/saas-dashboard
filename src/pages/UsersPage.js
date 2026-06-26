import { users } from "../data/users";
import { Table } from "../components/Table";
import { Input } from "../components/Input.js";
import { uiStore } from "../store/uiStore.js";

import { DashboardLayout } from "../layouts/DashboardLayout.js";

import { EmptyState } from "../components/EmptyState.js";

import { Pagination } from "../components/Pagination.js";

import {
    filterUsers,
    sortUsers,
    paginateUsers,
    getTotalPages,
} from "../services/userService.js";

export function UsersPage() {
    const filteredUsers = filterUsers(users, uiStore.userSearch);

    const sortedUsers = sortUsers(
        filteredUsers,
        uiStore.userSortField,
        uiStore.userSortDirection,
    );

    const paginatedUsers = paginateUsers(
        sortedUsers,
        uiStore.currentUserPage,
        uiStore.usersPerPage,
    );

    const rows = paginatedUsers.map((user) => [user.id, user.name, user.email]);

    const totalPages = getTotalPages(sortedUsers.length, uiStore.usersPerPage);

    uiStore.totalUserPages = totalPages;

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
                ? `${Table({
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
                  })}

              ${Pagination({
                  currentPage: uiStore.currentUserPage,
                  totalPages,
              })}
                `
                : EmptyState({
                      title: "No users found",
                      description: "Try adjusting your search criteria.",
                  })
        }
    </div>
  `);
}
