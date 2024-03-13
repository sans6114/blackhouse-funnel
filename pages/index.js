// Función para abrir y cerrar el menú lateral
function toggleSidebar() {
    var sidebar = document.getElementById('logo-sidebar');
    sidebar.classList.toggle('-translate-x-full'); // Cambia la clase para mostrar u ocultar el menú
}

// Función para cerrar el menú lateral
// Función para cerrar el menú lateral
function closeSidebar() {
    var sidebar = document.getElementById('logo-sidebar');
    sidebar.classList.remove('-translate-x-full'); // Remueve la clase para ocultar el menú
}


// Obtén el botón del menú
var menuButton = document.querySelector('[data-drawer-toggle="logo-sidebar"]');
// Agrega un evento de clic al botón para abrir y cerrar el menú
menuButton.addEventListener('click', function() {
    toggleSidebar();
});
