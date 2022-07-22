
const moduleURL = "/games";

const obtenerContenido = (direccion)=> {
    let cardsAmostrar = ""
    fetch(direccion)
        .then((response)=> response.json() )
        .then( (data)=> {
            for (contenido of data)
                cardsAmostrar += retornoCardContenido(contenido)
            contenidoDOM.innerHTML = cardsAmostrar
        })
        .catch((error)=> contenidoDOM.innerHTML = retornoCardError() )
        .finally(()=> cargandoDOM.innerHTML = "")
}