export function resaltarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.classList.toggle('resaltado'); 
        actualizarContador(); 
    }
}

export function eliminarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.remove(); 
        actualizarContador(); 
    }
}



document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar')) {
        const producto = event.target.closest('.producto');
        const id = producto.getAttribute('data-id');
        eliminarProducto(id);
    }
});