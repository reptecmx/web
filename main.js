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
        titulo: "Pc hp T740",
        imagen: "./img/computadoraEscritorio/img2.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 3300
    },
    {
        id: "pc-03",
        titulo: "Pc lenovo pentium",
        imagen: "./img/computadoraEscritorio/img3.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 2200
    },
    {
        id: "pc-04",
        titulo: "Mini pc intel",
        imagen: "./img/computadoraEscritorio/img4.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 3100
    },
    {
        id: "pc-05",
        titulo: "Pc amd a6",
        imagen: "./img/computadoraEscritorio/img5.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 2500
    },
    {
        id: "pc-06",
        titulo: "Pc hp core i3",
        imagen: "./img/computadoraEscritorio/img6.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 2690
    },
    {
        id: "pc-07",
        titulo: "Pc hp core i5",
        imagen: "./img/computadoraEscritorio/img7.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 3790
    },
    {
        id: "pc-08",
        titulo: "Pc hp core i5",
        imagen: "./img/computadoraEscritorio/img8.jpeg",
        categoria: { nombre: "COMPUTADORAS DE ESCRITORIO", id: "escritorio" },
        precio: 3190
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
        imagen: "./img/laptop/img2.jpg",
        categoria: { nombre: "LAPTOP", id: "laptop" },
        precio: 5200
    },

    // Punto de Venta
    {
        id: "pv-01",
        titulo: "Punto de venta",
        imagen: "./img/puntoDeVenta/img2.jpg",
        categoria: { nombre: "PUNTO DE VENTA", id: "punto_venta" },
        precio: 3700
    },
    {
        id: "pv-02",
        titulo: "Lector de Código de Barras",
        imagen: "./img/puntoDeVenta/img5.jpg",
        categoria: { nombre: "PUNTO DE VENTA", id: "punto_venta" },
        precio: 349
    },
    {
        id: "pv-03",
        titulo: "Impresora termica",
        imagen: "./img/puntoDeVenta/img6.jpg",
        categoria: { nombre: "PUNTO DE VENTA", id: "punto_venta" },
        precio: 649
    },
    {
        id: "pv-04",
        titulo: "Cajón de dinero",
        imagen: "./img/puntoDeVenta/img4.jpg",
        categoria: { nombre: "PUNTO DE VENTA", id: "punto_venta" },
        precio: 749
    },
    {
        id: "pv-05",
        titulo: "Teclado y ratón",
        imagen: "./img/puntoDeVenta/img3.jpg",
        categoria: { nombre: "PUNTO DE VENTA", id: "punto_venta" },
        precio: 189
    }
];


// Elementos del DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

// Elementos del Modal
const modal = document.querySelector("#modal-imagen");
const imgAmpliada = document.querySelector("#img-ampliada");
const modalTitulo = document.querySelector("#modal-titulo");
const cerrarModal = document.querySelector("#cerrar-modal");

// Función para renderizar los productos en la cuadrícula
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" data-titulo="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio.toLocaleString()}</p>
            </div>
        `;
        contenedorProductos.append(div);
    });

    // Activar el evento de clic en cada imagen recién creada
    const imagenesProductos = document.querySelectorAll(".producto-imagen");
    imagenesProductos.forEach(imagen => {
        imagen.addEventListener("click", (e) => {
            modal.style.display = "flex";
            imgAmpliada.src = e.currentTarget.src;
            modalTitulo.innerText = e.currentTarget.getAttribute("data-titulo");
        });
    });
}

// Cargar todos los productos al inicio
cargarProductos(productos);

// Eventos para cerrar el modal
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar también si se hace clic fuera de la imagen (en el fondo oscuro)
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Event listeners para los botones del menú lateral (resto de tu lógica igual)
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
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