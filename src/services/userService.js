export function filterUsers(users, query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        return users;
    }

    return users.filter((user) => {
        return (
            user.name.toLowerCase().includes(normalizedQuery) ||
            user.email.toLowerCase().includes(normalizedQuery) ||
            String(user.id) === normalizedQuery
        );
    });
}

export function sortUsers(users, field, direction) {
    const sortedUsers = [...users];

    sortedUsers.sort((a, b) => {
        if (a[field] < b[field]) {
            return direction === "asc" ? -1 : 1;
        }

        if (a[field] > b[field]) {
            return direction === "asc" ? 1 : -1;
        }

        return 0;
    });

    return sortedUsers;
}

export function paginateUsers(users, currentPage, usersPerPage) {
    const startIndex = (currentPage - 1) * usersPerPage;

    const endIndex = startIndex + usersPerPage;

    return users.slice(startIndex, endIndex);
}

export function getTotalPages(totalItems, itemsPerPage) {
    return Math.ceil(totalItems / itemsPerPage);
}
