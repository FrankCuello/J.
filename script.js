document.addEventListener('DOMContentLoaded', function() {
    const mensajeDinamico = document.getElementById('mensajeDinamico');
    const mensajes = [
        "Jenifer, este detalle es para iluminar tu día.",
        "Pensando en ti y en la alegría que traes.",
        "Un pequeño mensaje con mucho cariño para ti.",
        "Que este día sea tan especial como tú.",
        "Con aprecio, Jenifer."
    ];
    let contador = 0;

    function cambiarMensaje() {
        mensajeDinamico.textContent = mensajes[contador];
        contador = (contador + 1) % mensajes.length;
    }

    // Cambiar el mensaje cada 3 segundos (3000 milisegundos)
    setInterval(cambiarMensaje, 3000);

    // Mostrar el primer mensaje al cargar la página
    cambiarMensaje();
});