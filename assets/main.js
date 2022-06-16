
/* GameStore */
/* El sistema permite comprar juegos por categorias y agregarlos a una orden*/
const SEPARADOR = "--------------------------"
let juegos = []; //array de objetos para juegos
const CATEGORIAS = ["SNES","PC","PS5","SEGA"]; //array de categorias
let juegosFiltrados = []; //array de objetos para juegos filtrados por categoria
generarJuegos(); //genera el listado de juegos
let orden = new Orden(); //inicializa la orden, solo existe 1 orden para el sistema

//Proceso main
let programRun = true;
do {
    //menu categorias
    let option = prompt("Bienvenido a GameStore.\n" +
                 "Seleccione un numero de categoria.\n" +
                 SEPARADOR + "\n" +
                 obtenerMenuCATEGORIAS() +
                 SEPARADOR + "\n" +
                 "[0] VER CARRITO\n[00] SALIR");

    if( (option !== "0") && (option !== "00") ) {
        let menuJuego = true;
        do {
            //menu juegos
            let optionJuego = parseInt(prompt("Agrega tu juego al carrito\n" +
                              SEPARADOR + "\n" +
                              obtenerMenuJuegos(CATEGORIAS[option-1]) +
                              SEPARADOR + "\n" +
                              "[0] REGRESAR" ) );
            if(optionJuego !== 0 ) {
                orden.agregarJuego(juegosFiltrados[optionJuego-1]); //agrega el juego a la orden
            }
            else {
                menuJuego = false; //sale del menu
            }

        }while (menuJuego);
    }
    else if(option === "0"){
        orden.mostrarOrden();
    }
    else {
        programRun = false; //sale del menu
    }
}while(programRun);


//Recorre las categorias y las retorna en una cadena de texto
function obtenerMenuCATEGORIAS() {
    let mensaje = "";
    let contador = 0;
    for (let i=0; i <CATEGORIAS.length; i++) {
        mensaje += "["+ ++contador +"] "+CATEGORIAS[i]+"\n";
    }
    return mensaje;
}

//filtra juegos por categoria y retorna la lista en cadena de texto
function obtenerMenuJuegos(categoria) {
    let mensaje = "";
    let contador = 0;
    juegosFiltrados = juegos.filter( j => j.plataforma === categoria );
    for(let x in juegosFiltrados) {
        mensaje += "["+ ++contador +"] "+juegosFiltrados[x].nombre+"\n";
    }

    return mensaje;
}

//inicializa listado de juegos
function generarJuegos() {
    juegos.push(new Juego("ALADDIN",CATEGORIAS[0],15));
    juegos.push(new Juego("BOMBERMAN",CATEGORIAS[0],15));
    juegos.push(new Juego("BATTLETOADS",CATEGORIAS[0],20));
    juegos.push(new Juego("TORTUGAS NINJA",CATEGORIAS[0],20));
    juegos.push(new Juego("POWER RANGERS",CATEGORIAS[0],20));
    juegos.push(new Juego("SUNSET RIDERS",CATEGORIAS[0],30));
    juegos.push(new Juego("GTAV",CATEGORIAS[1],50));
    juegos.push(new Juego("STARCRAFT",CATEGORIAS[1],50));
    juegos.push(new Juego("DOTA2",CATEGORIAS[1],50));
    juegos.push(new Juego("RED ALERT",CATEGORIAS[1],50));
    juegos.push(new Juego("GOD OF WAR",CATEGORIAS[2],70));
    juegos.push(new Juego("THE LAST OF US",CATEGORIAS[2],70));
    juegos.push(new Juego("UNCHARTED",CATEGORIAS[2],70));
    juegos.push(new Juego("SONIC",CATEGORIAS[3],40));
    juegos.push(new Juego("POWERSTONE",CATEGORIAS[3],35));
}
