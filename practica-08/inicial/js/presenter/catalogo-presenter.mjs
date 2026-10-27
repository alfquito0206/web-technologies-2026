export function crearCatalogoPresenter(modelo, vista) {
  function mostrarTodos() {
    // TODO: pedir todos los libros al Modelo y mostrarlos mediante la Vista
    const libros = modelo.obtenerTodos();
    vista.renderizar(libros);
  }
  function mostrarDisponibles() {
    // TODO: pedir los libros disponibles al Modelo y mostrarlos mediante la Vista
    const libros = modelo.obtenerDisponibles();
    vista.renderizar(libros);
  }
  function iniciar() {
    // TODO: mostrar todos inicialmente
    // TODO: registrar mostrarDisponibles mediante la Vista
    mostrarTodos();
    vista.alMostrarDisponibles(mostrarDisponibles);
  }
  return { iniciar };
}
