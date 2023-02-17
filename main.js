
let saludo = prompt("Bienvenido/a! ingresa tu nombre");
let respuestaNombre = `Perfecto! ${saludo} Busca el maquillaje que necesites!`;
alert(respuestaNombre);

let cancelar = false;
while(!cancelar) {

    
const productos = [
  { id: 1, nombre: "Brocha", precio: 700 },
  { id: 2, nombre: "Paleta de sombras", precio: 3500 },
  { id: 3, nombre: "Labial", precio: 2000 },
  { id: 4, nombre: "Rimmel", precio: 3000 },];


let producto = prompt("Busca tu producto")
let encontrado = productos.find((item) => item.nombre === producto);
if (encontrado) {
alert(`El producto ${producto} se encuentra disponible, precio: $${encontrado.precio}`);
} else {
  alert(`El producto ${producto} no se encuentra disponible`);
}

let comprar = prompt('Ingresa "si" para agregar al carrito')
if(comprar === "si") {
  alert("Producto agregado al carrito")
} else {
  alert("Volver a empezar")   
}

cancelar = confirm('Para finalizar ingrese"Aceptar"')
}