// import
import * as UI from './interfaz.js';
import API from './api.js';

console.log(UI.divMensajes);

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e){
    e.preventDefault();

    // get data form
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        UI.divMensajes.textContent= 'Error... todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    const busqueda = new API(artista,cancion);
    busqueda.consultarAPI();
}
