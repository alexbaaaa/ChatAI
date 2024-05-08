class Grabacion{
    constructor (){
        this.content = {
            mensage: 'hola',
        }
        this.botonInicio = document.getElementById('botonInicio');
        this.salida = document.getElementById('salida');
        this.botonEnviar = document.getElementById('botonEnviar');
    }
    sendText(){
        return this.content;
    }
}

export {Grabacion};




// Funcionalidad del botón de limpiar: limpia el texto del elemento de salida.
botonEnviar.onclick = function() {
    // Limpia el contenido del elemento 'salida'.
    ws.send(JSON.stringify(content));
};

// Funcionalidad del botón de inicio: inicia el reconocimiento de voz.
botonInicio.addEventListener('click', function() {
    // Indicador para controlar el inicio del reconocimiento de voz.
    var speech = true;
    console.log('escucho');
    // Compatibilidad con prefijo webkit para navegadores que lo requieran.
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

    // Crear una instancia de SpeechRecognition.
    const reconocimiento = new SpeechRecognition();
    // Configurar para obtener resultados intermedios (no finales).
    reconocimiento.interimResults = true;

    // Manejar el evento 'result' para procesar los resultados del reconocimiento.
    reconocimiento.addEventListener('result', e => {
        console.log('estoy en el resultado');
        // Convertir los resultados del evento en un solo string de texto.
        const transcripcion = Array.from(e.results)
            .map(resultado => resultado[0])
            .map(resultado => resultado.transcript)
            .join('');

        // Actualizar el elemento 'salida' con el texto transcrito.
        salida.innerHTML = transcripcion;

        // Opcional: Mostrar el texto transcrito en la consola para depuración.
        console.log(transcripcion);
    });

    // Iniciar el reconocimiento de voz si la variable 'speech' es true.
    if (speech === true) {
        reconocimiento.start();
    }
});