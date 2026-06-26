export function EmptyState({ title, description }) {
  return `
        <div
            class="
                bg-white
                dark:bg-slate-800

                rounded-xl
                shadow-sm

                p-12
                text-center
            "
        >
            <h2
                class="
                    text-2xl
                    font-semibold
                "
            >
                ${title}
            </h2>

            <p
                class="
                    mt-3
                    text-slate-500
                "
            >
                ${description}
            </p>
        </div>
    `;
}
