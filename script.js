let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const contador = document.getElementById('contador-carrito');
  const lista = document.getElementById('lista-carrito');
  const total = document.getElementById('total-pago');

  contador.textContent = carrito.length;
  lista.innerHTML = '';

  let suma = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = ${item.nombre} - $${item.precio.toLocaleString()};
    lista.appendChild(li);
    suma += item.precio;
  });

  total.textContent = Total: $${suma.toLocaleString()};
}

function simularPago() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  alert("¡Pago exitoso! Gracias por tu compra.");
  carrito = [];
  actualizarCarrito();
}
