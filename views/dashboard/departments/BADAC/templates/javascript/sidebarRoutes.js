// Add new Side Menu here
const baseUrl = window.location.origin;
const currentPath = window.location.pathname.split('/').slice(0, -1).join('/');

export const sidebarRoutes = [
    // BADAC Things
<<<<<<< HEAD
    { className: "main", path: "/views/dashboard/departments/BADAC/templates/home.php" },
    { className: "dashboard", path: "/views/dashboard/departments/BADAC/templates/dashboard.php" },
    { className: "badac-form", path: "/views/dashboard/departments/BADAC/templates/form.php" },
    { className: "badac-notify", path: "/views/dashboard/departments/BADAC/templates/notification.php" },
    { className: "forwarded-complaints", path: "/views/dashboard/departments/BADAC/templates/forward-complaints.php"}

=======
    { className: "main", path: `${baseUrl}${currentPath}/home.php` },
    { className: "dashboard", path: `${baseUrl}${currentPath}/dashboard.php` },
    { className: "badac-form", path: `${baseUrl}${currentPath}/form.php` },
    { className: "badac-notify", path: `${baseUrl}${currentPath}/notification.php` },
    { className: "gov-contact", path: `${baseUrl}${currentPath}/contact.php` },
    { className: "forwarded-complaints", path: `${baseUrl}${currentPath}/forward-complaints.php`}
>>>>>>> fc505a24477b6230d133c7f7a68af757b6db9405
];
