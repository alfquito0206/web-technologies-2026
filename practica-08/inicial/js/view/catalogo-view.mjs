export function crearCatalogoView() {
  const lista = document.getElementById('catalogo');
  const boton = document.getElementById('mostrar-disponibles');

  function renderizar(libros) {
    // TODO: limpiar la lista
    // TODO: recorrer los libros
    // TODO: crear un <li> por cada libro
    // TODO: mostrar titulo y precio con textContent
    // TODO: añadir los <li> al DOM
  }

  function alMostrarDisponibles(callback) {
    // TODO: asociar callback a onclick del botón
  }

  return { renderizar, alMostrarDisponibles };
}
