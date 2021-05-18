const formulario = document.querySelector('#form');
const titulo = document.querySelector('#titulo');
const descripcion = document.querySelector('#descripcion');
const area = document.querySelector('#area');

eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', crearTarjeta);

}

function crearTarjeta(e) {
    e.preventDefault();
    /*
    if (titulo.value.length === 0) {
        let error = document.createElement('li');
        error.classList.add('error');
        error.textContent = "Debes escribir un título";
        formulario.appendChild(error);
        titulo.classList.add('borde-rojo');
        return;
    }
    */
    

    
    let tarjeta = document.createElement('div'); // creo el div
    let title = document.createElement('h2'); // creo el titulo
    let description = document.createElement('p'); // creo el párrafo
    let btnBorrar = document.createElement('a'); // creo el boton borrar tarjeta
    
    tarjeta.classList.add('tarjeta'); // le agrego una clase a la tarjeta
    area.appendChild(tarjeta); // agrego la tarjeta dentro del contenedor padre

    title.classList.add('titulo'); // le agrego la clase al h2
    title.textContent = titulo.value; // le agrego el contenido
    tarjeta.appendChild(title); // la incorporo en la tarjeta

    description.classList.add('descripcion'); // le agrego una clase a la descripcion
    description.innerText = descripcion.value // le agrego el contenido 
    tarjeta.appendChild(description); // la incorporo en la tarjeta debajo del titulo

    btnBorrar.innerText = "X";
    btnBorrar.classList.add('btn-borrar');
    tarjeta.appendChild(btnBorrar);

    btnBorrar.addEventListener('click', (e)=> {
        e.target.parentNode.remove();
    });

    formulario.reset();
}







