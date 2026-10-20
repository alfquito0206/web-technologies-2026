import { librosIniciales } from './data/seed.mjs';
import { crearCatalogo } from './model/catalogo.mjs';

const modelo = crearCatalogo(librosIniciales);

const lista = document.getElementById('catalogo');
const boton = document.getElementById('mostrar-disponibles');

function mostrarLibros(libros) {
  // TODO: limpiar la lista actual
  // TODO: recorrer los libros
  // TODO: crear un <li> por libro
  // TODO: escribir titulo y precio con textContent
  // TODO: añadir cada <li> a la lista
  
 lista.textContent = '';
  for (const libro of libros) {
    const li = document.createElement('li');
    li.textContent = `${libro.titulo} - ${libro.precio}`;
    lista.appendChild(li);
  }
}
mostrarLibros(modelo.obtenerTodos());

// TODO: mostrar inicialmente todos los libros

// TODO: al pulsar el botón, mostrar solo los libros disponibles

boton.addEventListener('click', () => {
  const disponibles = modelo.obtenerDisponibles();
  mostrarLibros(disponibles);
});