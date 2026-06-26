export function Pagination({ currentPage, totalPages }) {
  return `
        <div
            class="
                flex
                items-center
                justify-center
                gap-2
            "
        >
            <button
                id="prev-page"
                class="
                    px-4
                    py-2

                    rounded-lg

                    border
                "
            >
                Previous
            </button>

            <span>
                Page
                ${currentPage}
                of
                ${totalPages}
            </span>

            <button
                id="next-page"
                class="
                    px-4
                    py-2

                    rounded-lg

                    border
                "
            >
                Next
            </button>
        </div>
    `;
}
