export function Button({ label, variant = "primary" }) {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",

    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
  };

  return `
        <button
            class="
                px-4
                py-2
                rounded-lg
                font-medium
                transition
                ${variants[variant]}
                "
            >
                ${label}
        </button>
    `;
}
