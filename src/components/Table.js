export function Table({ headers, rows }) {
  const headerMarkup = headers
    .map(
      (header) => `
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
                ${header}
            </th>
        `,
    )
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
