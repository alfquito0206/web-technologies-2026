import { librosIniciales } from './data/seed.mjs';
import { crearCatalogo } from './model/catalogo.mjs';
import { crearCatalogoView } from './view/catalogo-view.mjs';
import { crearCatalogoPresenter } from './presenter/catalogo-presenter.mjs';

const modelo = crearCatalogo(librosIniciales);
const vista = crearCatalogoView();
const presentador = crearCatalogoPresenter(modelo, vista);

presentador.iniciar();
