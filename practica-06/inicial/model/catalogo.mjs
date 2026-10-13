export function crearCatalogo(librosIniciales) {
  const libros = [...librosIniciales];

  function obtenerTodos() {
    // TODO: devolver todos los libros
    console.log("Total: ", libros);
  }

  function buscarPorId(id) {
    // TODO: localizar un libro por id usando find()
    return libros.find(
      libro => libro.id === id
    );
  }

  function obtenerDisponibles() {
    // TODO: devolver los libros disponibles usando filter()
    return libros.filter(
      libro => libro.disponible === true
    );
  }

  return {
    obtenerTodos,
    buscarPorId,
    obtenerDisponibles
  };
}
