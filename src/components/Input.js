export function Input({ id, placeholder = "", value = "" }) {
  return `
        <input
            id="${id}"
            value="${value}"
            placeholder="${placeholder}"

            class="
                w-full

                px-4
                py-3

                rounded-lg

                border
                border-slate-300

                bg-white
                dark:bg-slate-800

                dark:border-slate-700

                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
            "
        />
    `;
}
