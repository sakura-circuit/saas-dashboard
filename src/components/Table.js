import { uiStore } from "../store/uiStore";

export function Table({ headers, rows }) {
  const headerMarkup = headers
    .map((header) => {
      let indicator = "";

      if (uiStore.userSortField === header.field) {
        indicator = uiStore.userSortDirection === "asc" ? "↑" : "↓";
      }
      return `
            <th
                class="
                    text-left
                    px-4
                    py-3
                    border-b
                    border-slate-200
                    dark:border-slate-700
                "
            >
                <button
                    data-sort-field="${header.field}"
                    class="
                        sort-button

                        flex
                        items-center
                        gap-2

                        font-semibold

                        hover:text-blue-500
                    "
                >
                    ${header.label}
                    ${indicator}
                </button>
            </th>
        `;
    })
    .join("");

  const rowMarkup = rows
    .map(
      (row) => `
            <tr>
                ${row
                  .map(
                    (cell) => `
                        <td
                            class="
                                px-4
                                py-3
                                border-b
                                border-slate-200
                                dark:border-slate-700
                            "
                        >
                            ${cell}
                        </td>
                    `,
                  )
                  .join("")}
            </tr>
        `,
    )
    .join("");

  return `
        <div
            class="
                overflow-x-auto
                bg-white
                dark:bg-slate-800
                rounded-xl
                shadow-sm
            "
        >
            <table class="w-full">

                <thead>
                    <tr>
                        ${headerMarkup}
                    </tr>
                </thead>

                <tbody>
                    ${rowMarkup}
                </tbody>

            </table>
        </div>

    `;
}
