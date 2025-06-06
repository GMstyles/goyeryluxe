
const productos = [
  { id: 1, nombre: "Anillo Esmeralda", precio: 350000, imagen: "img/anillo1.png" },
  { id: 2, nombre: "Collar de Oro", precio: 480000, imagen: "img/collar1.png" },
  { id: 3, nombre: "Aretes Gema", precio: 290000, imagen: "img/aretes1.png" }
];

let carrito = [];

function cargarProductos() {
  const contenedor = document.getElementById("productos");
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="\${producto.imagen}" alt="\${producto.nombre}">
      <h3>\${producto.nombre}</h3>
      <p>$\${producto.precio.toLocaleString()}</p>
      <button onclick="agregarAlCarrito(\${producto.id})">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("carrito-container");
  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    lista.innerHTML += `<p>\${item.nombre} - $\${item.precio.toLocaleString()}</p>`;
  });
  mostrarResumen();
}

function mostrarResumen() {
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  const resumen = document.getElementById("resumen-container");
  resumen.innerHTML = `
    <h3>Total: $\${total.toLocaleString()}</h3>
    <button onclick="simularPago()">Simular Pago</button>
  `;
}

function simularPago() {
  alert("✅ ¡Gracias por tu compra en Goyery Luxe!");
  carrito = [];
  mostrarCarrito();
}

window.onload = cargarProductos;
