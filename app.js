// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function sortearAmigo(){
    // validamos que haya amigos
    if(amigos.length==0){
        alert('No se puede realizar el sorteo sin amigos.');
    }
    else{
        // generamos el numero aleatorio con base en la cantidad de amigos en el arreglo 
        let indiceAleatorio = Math.floor((Math.random() * amigos.length));
        console.log('indice aleatorio: ', indiceAleatorio);
        // extraemos el nombre del arreglo con el indice generado
        let nombreSeleccionado = amigos[indiceAleatorio];
        // mostramos el resultado en la sección correspondiente
        let listaResultado = document.getElementById('resultado');
        // creamos elementos li
        const item = document.createElement('li');
        // asignamos contenido al elmento li
        item.innerHTML = nombreSeleccionado;
        // lo asociamos a su respectivo ul
        listaResultado.appendChild(item);


    }
}

function actualizarLista(){
    //buscamos la lista
    let lista = document.getElementById('listaAmigos');
    // limpiamos la lista existente
    lista.innerHTML = '';

    // iteramos sobre el arreglo
    for(let i=0; i< amigos.length; i++){
        // creamos elementos li
        const item = document.createElement('li');
        // asignamos contenido al elmento li
        item.innerHTML = amigos[i];
        // lo asociamos a su respectivo ul
        lista.appendChild(item);

    }

}

function agregarAmigo(){
    // obtenemos el valor del campo de texto
    let amigoIngresado = document.getElementById('amigo');
    //validamos la entrada
    if(amigoIngresado.value == '' || amigoIngresado.value == null || amigoIngresado.value ==undefined){
        alert('Por favor, inserte un nombre.');
    }
    else{
        // añadimos el valor válido al arreglo de amigos
        amigos.push(amigoIngresado.value);
    }
    // limpiamos el campo de entrada
    amigoIngresado.value = '';
    //verificamos el arreglo amigos
    console.log(amigos);
    // invocamos la función que actualiza la lista
    actualizarLista();
}