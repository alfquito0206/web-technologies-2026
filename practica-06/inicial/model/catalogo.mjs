export function crearCatalogo(librosIniciales) {
  const libros = [...librosIniciales];

  function obtenerTodos() {
    // TODO: devolver todos los libros
  }

  function buscarPorId(id) {
    // TODO: localizar un libro por id usando find()
  }

  function obtenerDisponibles() {
    // TODO: devolver los libros disponibles usando filter()
  }

  return {
    obtenerTodos,
    buscarPorId,
    obtenerDisponibles
  };
}
