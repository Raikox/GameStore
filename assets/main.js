const CATEGORIAS = ["SNES","PC","PS5","SEGA"];
const SEPARADOR = "--------------------------"
let juegos = [];
let orden = new Orden();

function generarJuegos() {
    juegos.push(new Juego("STARCRAFT",CATEGORIAS[1],60));
    juegos.push(new Juego("ALADDIN",CATEGORIAS[0],25));
    juegos.push(new Juego("TWISTED METAL",CATEGORIAS[2],35));
    juegos.push(new Juego("GOD OF WAR",CATEGORIAS[2],45));
    juegos.push(new Juego("SONIC",CATEGORIAS[3],40));
    juegos.push(new Juego("THE LAST OF US",CATEGORIAS[2],60));
}
generarJuegos();


function buscarProducto() {
    let busqueda = document.getElementById("txtBusqueda").value.toUpperCase();
    if(busqueda !== ""){
        let resultado = juegos.find( p => p.nombre.includes(busqueda) );
        if (resultado !== undefined) {
            alert("Su busqueda tuvo el siguiente resultado: \n"+resultado);
        }
        else {
            alert("No se encontro el juego buscado");
        }
    }
}

function comprarJuego(indice) {
    orden.agregarJuego(juegos[indice]);
    alert("Se agrego el juego: "+ juegos[indice].nombre);
}

function verOrden() {
    orden.mostrarOrden();
}