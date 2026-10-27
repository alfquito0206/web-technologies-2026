export function crearCatalogo(librosIniciales) {
  const libros = [...librosIniciales];

  function obtenerTodos() {
    return libros;
  }

  function buscarPorId(id) {
    return libros.find(libro => libro.id === id);
  }

  function obtenerDisponibles() {
    return libros.filter(libro => libro.disponible === true);
  }

  return {
    obtenerTodos,
    buscarPorId,
    obtenerDisponibles
  };
}
