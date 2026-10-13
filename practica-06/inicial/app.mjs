import { librosIniciales } from './data/seed.mjs';
import { crearCatalogo } from './model/catalogo.mjs';

const catalogo = crearCatalogo(librosIniciales);

console.log('Completa el modelo y sustituye estas comprobaciones:');
console.log('Total:', catalogo.obtenerTodos());
console.log('Libro 2:', catalogo.buscarPorId(2));
console.log('Libro 99:', catalogo.buscarPorId(99));
console.log('Disponibles:', catalogo.obtenerDisponibles());
