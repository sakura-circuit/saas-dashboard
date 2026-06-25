export function Card(content) {
  return `
        <div
            class="
                bg-white
                rounded-xl
                shadow-sm
                border-slate-200
                p-6
                "
            >
                ${content}
        </div>
    `;
}
