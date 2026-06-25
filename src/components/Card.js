export function Card(content) {
  return `
        <div
            class="
                bg-white
                dark:bg-slate-800
                rounded-xl
                shadow-sm
                border-slate-200
                p-6

                text-slate-900
                dark:text-slate-100
                "
            >
                ${content}
        </div>
    `;
}
