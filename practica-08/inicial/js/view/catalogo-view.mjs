export function crearCatalogoView() {
  const lista = document.getElementById('catalogo');
  const boton = document.getElementById('mostrar-disponibles');

  function renderizar(libros) {
    // TODO: limpiar la lista
    // TODO: recorrer los libros
    // TODO: crear un <li> por cada libro
    // TODO: mostrar titulo y precio con textContent
    // TODO: añadir los <li> al DOM
    lista.innerHTML = '';
    for (const libro of libros){
      const li = document.createElement('li')
      li.textContent = libro.titulo;
      lista.append(li);
    }
  }

  function alMostrarDisponibles(callback) {
    // TODO: asociar callback a onclick del botón
    boton.onclick = callback;
  }

  return { renderizar, alMostrarDisponibles };
}
