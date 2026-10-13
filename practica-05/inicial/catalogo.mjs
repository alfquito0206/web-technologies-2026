const titulo = 'El Quijote';
let unidades = 3;
let precio = 12.5;

console.log('Título:', titulo);
console.log('Precio:', precio);
console.log('Tipo de precio:', typeof precio);

function calcularTotal(unidades, precio) {
  // TODO: si unidades <= 0 o precio <= 0, devolver 0
  // TODO: en otro caso, devolver unidades * precio
  if (unidades <= 0 || precio <= 0) {
    return 0;
  } else {
    return unidades * precio;
  }
}

function clasificarPrecio(precio) {
  // TODO: devolver 'alto' si precio >= 20
  // TODO: devolver 'normal' en otro caso



}

console.log('Total 3 x 12.5:', calcularTotal(3, 12.5));
console.log('Total 0 x 12.5:', calcularTotal(0, 12.5));
console.log('Clasificación 12.5:', clasificarPrecio(12.5));
console.log('Clasificación 25:', clasificarPrecio(25));

console.log('unidades === 3:', unidades === 3);
console.log("Number('4') + unidades:", Number('4') + unidades);

// TODO: usar un for para mostrar los totales de 1, 2 y 3 unidades a precio 10
