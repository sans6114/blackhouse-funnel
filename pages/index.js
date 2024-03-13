// Función para abrir y cerrar la barra lateral
function toggleSidebar() {
    var sidebar = document.getElementById("logo-sidebar");
    sidebar.classList.toggle("-translate-x-full");
}

// Función para cerrar la barra lateral si se hace clic fuera de ella
function closeSidebarOnClickOutside(event) {
    var sidebar = document.getElementById("logo-sidebar");
    var sidebarButton = document.querySelector("[data-drawer-toggle='logo-sidebar']");

    // Si se hace clic fuera de la barra lateral y no en el botón que la abre, cerrar la barra lateral
    if (!sidebar.contains(event.target) && !sidebarButton.contains(event.target)) {
        sidebar.classList.add("-translate-x-full");
    }
}

// Agregar un evento de clic al documento para cerrar la barra lateral cuando se hace clic fuera de ella
document.addEventListener("click", closeSidebarOnClickOutside);
