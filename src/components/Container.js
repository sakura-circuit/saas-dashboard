export function Container(content) {
  return `
        <div
            class="
                max-w-7x1
                mx-auto
                px-4
                sm:px-6
                lg:px-8
                "
            >
                ${content}
            </div>
    `;
}
