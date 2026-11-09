// Array con tus productos y sus categorías
console.log("¡El archivo main.js se está leyendo correctamente!");
const productos = [
    // Computadoras de Escritorio
    {
        id: "pc-01",
        titulo: "Pc lenovo ryzen 3",
        imagen: "./img/computadoraEscritorio/img1.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 3700
    },
    {
        id: "pc-02",
        titulo: "Pc hp core i5",
        imagen: "./img/computadoraEscritorio/img2.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 3190
    },
    {
        id: "pc-03",
        titulo: "Pc hp core i9",
        imagen: "./img/computadoraEscritorio/img2.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 5190
    },
    {
        id: "pc-04",
        titulo: "Pc hp core i3",
        imagen: "./img/computadoraEscritorio/img3.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 2690
    },

    // Laptops
    {
        id: "lap-01",
        titulo: "ASUS VIVOBOOK",
        imagen: "./img/laptop/img1.jpg",
        categoria: { nombre: "LAPTOP", id: "laptop" },
        precio: 5500
    },
    {
        id: "lap-02",
        titulo: "Laptop Lenovo Ryzen 3",
        imagen: "./img/laptop/img2.jpeg",
        categoria: { nombre: "LAPTOP", id: "laptop" },
        precio: 5200
    },

    // Punto de Venta
    {
        id: "pv-01",
        titulo: "Punto de venta",
        imagen: "./img/puntoVenta/img1.jpg",
        categoria: { nombre: "PUNTO DE VENTA", id: "punto_venta" },
        precio: 1250
    },
    {
        id: "pv-02",
        titulo: "Lector de Código de Barras",
        imagen: "./img/puntoVenta/img2.jpeg",
        categoria: { nombre: "PUNTO DE VENTA", id: "punto_venta" },
        precio: 890
    }
];

// Elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

// Función para renderizar los productos en la cuadrícula
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio.toLocaleString()}</p>
            </div>
        `;
        contenedorProductos.append(div);
    });
}

// Cargar todos los productos al inicio
cargarProductos(productos);

// Event listeners para los botones del menú lateral
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        // Manejo de la clase active y cambio del icono
        botonesCategorias.forEach(b => {
            b.classList.remove("active");
            const icono = b.querySelector("i");
            if (icono) {
                icono.classList.replace("bi-hand-index-thumb-fill", "bi-hand-index-thumb");
            }
        });

        const botonActual = e.currentTarget;
        botonActual.classList.add("active");
        const iconoActual = botonActual.querySelector("i");
        if (iconoActual) {
            iconoActual.classList.replace("bi-hand-index-thumb", "bi-hand-index-thumb-fill");
        }

        // Filtrado por categoría
        if (botonActual.id !== "todos") {
            const productoCategoria = productos.find(p => p.categoria.id === botonActual.id);
            tituloPrincipal.innerText = productoCategoria ? productoCategoria.categoria.nombre : "Productos";
            
            const productosFiltrados = productos.filter(p => p.categoria.id === botonActual.id);
            cargarProductos(productosFiltrados);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});