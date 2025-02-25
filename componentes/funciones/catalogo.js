import { productos } from '../../data.js';
import { producto } from './itemProducto.js';
import { resaltarProducto } from './funcionesProductos.js';

export function cargarProductos() {
    const contenedorProductos = document.getElementById('contenedor-productos');

    productos.forEach(prod => {
        const item = producto(prod); 
        contenedorProductos.appendChild(item);

        item.addEventListener('click', () => resaltarProducto(prod.id)); 
    });
}