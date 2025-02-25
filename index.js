import { cargarProductos } from './componentes/funciones/catalogo.js';
import { mostrarMenu } from './componentes/header/header.js';

function iniciarApp() {
    let app = document.querySelector("#root");

    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    let header = document.createElement('header');
    header.innerHTML = `
        <h1>PRODUCTOS</h1>
        <div id="contador-productos"></div>
    `;
    contenedor.appendChild(header);

    let divProductos = document.createElement('div');
    divProductos.id = "contenedor-productos";
    divProductos.className = "div_productos";
    contenedor.appendChild(divProductos);

    let footer = document.createElement('div');
    footer.className = "div_footer";
    footer.textContent = "productos gt";
    contenedor.appendChild(footer);

    app.appendChild(contenedor);

    cargarProductos();
    mostrarMenu();
}

document.addEventListener('DOMContentLoaded', iniciarApp);