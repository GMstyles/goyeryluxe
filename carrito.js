let carrito = [];
const carritoContainer = document.getElementById("carrito-container");
const resumenContainer = document.getElementById("resumen-container");

// Función para agregar productos
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
}

// Mostrar productos en el carrito
function mostrarCarrito() {
    carritoContainer.innerHTML = "";
    carrito.forEach((producto, index) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoContainer.appendChild(item);
    });
    mostrarResumen();
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

// Mostrar resumen y botón de "simular pago"
function mostrarResumen() {
    const total = carrito.reduce((acc, p) => acc + p.precio, 0);
    resumenContainer.innerHTML = `
        <h3>Total: $${total}</h3>
        <button onclick="simularPago()">Pagar</button>
    `;
}

// Simular pago
function simularPago() {
    alert("¡Gracias por tu compra! Recibimos tu pedido.");
    carrito = [];
    mostrarCarrito();
