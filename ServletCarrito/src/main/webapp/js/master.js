let compra_Total = 0;

function agregarProducto(valor_Producto, valor_Precio) {
  let td_Producto = document.createElement("td");
  let td_Precio = document.createElement("td");
  let td_Total = document.getElementById("compra_Total");
  let fila = document.createElement("tr");
  let body_tabla = document.getElementById("compra_Lista");

  td_Producto.id = "producto_Nombre";
  td_Producto.innerText = valor_Producto;
  td_Producto.innerHTML = `<input readonly type='text' name=nombre value='${td_Producto.innerText}'>`;

  td_Precio.id = "producto_Precio";
  td_Precio.innerText = valor_Precio;
  td_Precio.innerHTML = `<input readonly type='text' name=precio value='${td_Precio.innerText}'>`;

  compra_Total += valor_Precio;
  td_Total.innerText = compra_Total;

  fila.appendChild(td_Producto);
  fila.appendChild(td_Precio);
  body_tabla.appendChild(fila);
}
