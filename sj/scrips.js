javascript

document.addEventListener('DOMContentLoaded', function() {

    const patronDiv = document.getElementById('patronTexto');

    if (!patronDiv) return;



    const palabras = [

        'ubic', 'cubic', 'ugubic', 'umebubic', 'dubic', 

        'ticoubic', 'uevicubic', 'bunice', 'useful', 'Granda', 

        'Grandma', 'Commento', 'cumanoga', 'greenugogue'

    ];

    

    let resultado = '';

    

    for (let i = 0; i < 150; i++) {

        let linea = '';

        let repeticiones = Math.floor(Math.random() * 30) + 10;

        

        for (let j = 0; j < repeticiones; j++) {

            let palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];

            linea += palabraAleatoria;

            if (Math.random() > 0.3) {

                linea += ' ';

            }

        }

        resultado += linea + '\n';

    }

    

    patronDiv.textContent = resultado;

});



// =======================================================================

// NUEVO: LÓGICA CON VISTA PREVIA EN VIVO Y REGULADOR DE TAMAÑO

// =======================================================================



document.addEventListener('DOMContentLoaded', function() {

    // Referencias a los elementos del panel y plano

    const contenedorPlano = document.querySelector('.contenedor-plano-gigante');

    const btnGenerarPunto = document.getElementById('btnGenerarPunto');

    const txtIndicador = document.getElementById('txtIndicador');

    const colorIndicador = document.getElementById('colorIndicador');

    const tamanoIndicador = document.getElementById('tamanoIndicador');



    // Referencia al círculo de la vista previa (el que está dentro de la zona de puntos)

    const previewCirculo = document.getElementById('previewCirculo');



    // Seguridad: si no existen, frena el script

    if (!contenedorPlano || !btnGenerarPunto || !previewCirculo) return;



    /* ------------------------------------------------------------- */

    /* INTERACCIONES EN TIEMPO REAL CON LA VISTA PREVIA              */

    /* ------------------------------------------------------------- */



    // Cambiar color de la vista previa inmediatamente al seleccionar

    colorIndicador.addEventListener('input', () => {

        previewCirculo.style.backgroundColor = colorIndicador.value;

    });



    // Cambiar tamaño de la vista previa inmediatamente al mover el control deslizable

    tamanoIndicador.addEventListener('input', () => {

        const diametro = `${tamanoIndicador.value}px`;

        previewCirculo.style.width = diametro;

        previewCirculo.style.height = diametro;

    });



    /* ------------------------------------------------------------- */

    /* CREACIÓN DEL PIN INDEPENDIENTE EN EL PLANO                    */

    /* ------------------------------------------------------------- */



    // Escuchador de clicks en el botón de agregar

    btnGenerarPunto.addEventListener('click', () => {

        const texto = txtIndicador.value.trim();

        const color = colorIndicador.value;

        const tamano = tamanoIndicador.value; // Captura el tamaño seleccionado



        if (texto === "") {

            alert("Por favor, ingresa un texto identificador para el pin.");

            return;

        }



        // 1. Crear el nodo envoltorio del Pin

        const marcador = document.createElement('div');

        marcador.classList.add('punto-marcador');

        

        // Lo posicionamos inicialmente a mitad del contenedor del plano

        marcador.style.left = "50%";

        marcador.style.top = "50%";



        // 2. Crear la cajita del texto

        const divTexto = document.createElement('div');

        divTexto.classList.add('punto-texto');

        divTexto.innerText = texto;



        // 3. Crear la bolita con el color y el tamaño dinámicos

        const divCirculo = document.createElement('div');

        divCirculo.classList.add('punto-circulo');

        divCirculo.style.backgroundColor = color;

        divCirculo.style.width = `${tamano}px`;  // Aplica el tamaño del slider

        divCirculo.style.height = `${tamano}px`; // Aplica el tamaño del slider



        // 4. Armar la estructura

        marcador.appendChild(divTexto);

        marcador.appendChild(divCirculo);



        // 5. Agregar el marcador directo al contenedor de tu plano

        contenedorPlano.appendChild(marcador);



        // 6. Activar los controladores de movimiento para que sea arrastrable en el mapa

        activarArrastrar(marcador, contenedorPlano);

    });

});



// Función encargada de capturar los eventos del mouse para desplazar el pin

function activarArrastrar(elemento, contenedor) {

    let moviendose = false;



    // Al hacer click sobre el pin

    elemento.addEventListener('mousedown', (e) => {

        moviendose = true;

        elemento.style.zIndex = 1000; // Lo manda al frente mientras se mueva

    });



    // Al mover el mouse por toda la pantalla

    document.addEventListener('mousemove', (e) => {

        if (!moviendose) return; // Si no está clickeado, no hace nada



        // Detecta dinámicamente dónde está el recuadro del plano en pantalla

        const limitesContenedor = contenedor.getBoundingClientRect();



        // Calcula la posición del mouse relativa a las esquinas del contenedor

        let posX = e.clientX - limitesContenedor.left;

        let posY = e.clientY - limitesContenedor.top;



        /* --- SISTEMA DE SEGURIDAD: EVITA QUE EL PIN SE SALGA DE LA ZONA --- */

        if (posX < 0) posX = 0;

        if (posY < 0) posY = 0;

        if (posX > limitesContenedor.width) posX = limitesContenedor.width;

        if (posY > limitesContenedor.height) posY = limitesContenedor.height;



        // Asigna la posición en tiempo real mediante estilos inline

        elemento.style.left = `${posX}px`;

        elemento.style.top = `${posY}px`;

    });



    // Al soltar el click del mouse

    document.addEventListener('mouseup', () => {

        if (moviendose) {

            moviendose = false;

            elemento.style.zIndex = 100; // Restablece prioridad de capa normal

        }

    })
document.addEventListener('DOMContentLoaded', function() {
    const patronDiv = document.getElementById('patronTexto');
    if (!patronDiv) return;

    const palabras = [
        'ubic', 'cubic', 'ugubic', 'umebubic', 'dubic', 
        'ticoubic', 'uevicubic', 'bunice', 'useful', 'Granda', 
        'Grandma', 'Commento', 'cumanoga', 'greenugogue'
    ];
    
    let resultado = '';
    
    for (let i = 0; i < 150; i++) {
        let linea = '';
        let repeticiones = Math.floor(Math.random() * 30) + 10;
        
        for (let j = 0; j < repeticiones; j++) {
            let palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
            linea += palabraAleatoria;
            if (Math.random() > 0.3) {
                linea += ' ';
            }
        }
        resultado += linea + '\n';
    }
    
    patronDiv.textContent = resultado;
});

// =======================================================================
// LÓGICA CON VISTA PREVIA EN VIVO Y REGULADOR DE TAMAÑO
// =======================================================================

document.addEventListener('DOMContentLoaded', function() {
    const contenedorPlano = document.querySelector('.contenedor-plano-gigante');
    const btnGenerarPunto = document.getElementById('btnGenerarPunto');
    const txtIndicador = document.getElementById('txtIndicador');
    const colorIndicador = document.getElementById('colorIndicador');
    const tamanoIndicador = document.getElementById('tamanoIndicador');
    const previewCirculo = document.getElementById('previewCirculo');

    if (!contenedorPlano || !btnGenerarPunto || !previewCirculo) return;

    // Cambiar color inmediato en vista previa
    colorIndicador.addEventListener('input', () => {
        previewCirculo.style.backgroundColor = colorIndicador.value;
    });

    // Cambiar tamaño inmediato en vista previa
    tamanoIndicador.addEventListener('input', () => {
        const diametro = `${tamanoIndicador.value}px`;
        previewCirculo.style.width = diametro;
        previewCirculo.style.height = diametro;
    });

    // Crear el pin en el plano al hacer click
    btnGenerarPunto.addEventListener('click', () => {
        const texto = txtIndicador.value.trim();
        const color = colorIndicador.value;
        const tamano = tamanoIndicador.value; 
        const imgPlano = document.getElementById('vista-plano');

        if (texto === "") {
            alert("Por favor, ingresa un texto identificador para el pin.");
            return;
        }

        if (imgPlano.style.display === 'none' || imgPlano.src === "") {
            alert("Por favor, primero carga una imagen con el botón 'Agregar planos'.");
            return;
        }

        // 1. Crear el envoltorio del Pin
        const marcador = document.createElement('div');
        marcador.classList.add('punto-marcador');
        marcador.style.left = "50%";
        marcador.style.top = "50%";

        // 2. Crear texto
        const divTexto = document.createElement('div');
        divTexto.classList.add('punto-texto');
        divTexto.innerText = texto;

        // 3. Crear la bolita
        const divCirculo = document.createElement('div');
        divCirculo.classList.add('punto-circulo');
        divCirculo.style.backgroundColor = color;
        divCirculo.style.width = `${tamano}px`;  
        divCirculo.style.height = `${tamano}px`; 

        marcador.appendChild(divTexto);
        marcador.appendChild(divCirculo);
        contenedorPlano.appendChild(marcador);

        // 4. Activar arrastre limitado al tamaño de la imagen
        activarArrastrar(marcador, imgPlano);
    });
});

function activarArrastrar(elemento, componenteReferencia) {
    let moviendose = false;

    elemento.addEventListener('mousedown', (e) => {
        moviendose = true;
        elemento.style.zIndex = 1000; 
    });

    document.addEventListener('mousemove', (e) => {
        if (!moviendose) return; 

        const limitesContenedor = componenteReferencia.getBoundingClientRect();
        const limitesPadre = elemento.parentElement.getBoundingClientRect();

        let posX = e.clientX - limitesPadre.left;
        let posY = e.clientY - limitesPadre.top;

        let minX = limitesContenedor.left - limitesPadre.left;
        let maxX = minX + limitesContenedor.width;
        let minY = limitesContenedor.top - limitesPadre.top;
        let maxY = minY + limitesContenedor.height;

        if (posX < minX) posX = minX;
        if (posX > maxX) posX = maxX;
        if (posY < minY) posY = minY;
        if (posY > maxY) posY = maxY;

        elemento.style.left = `${posX}px`;
        elemento.style.top = `${posY}px`;
    });

    document.addEventListener('mouseup', () => {
        if (moviendose) {
            moviendose = false;
            elemento.style.zIndex = 100; 
        }
    });
}
