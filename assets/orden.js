class Orden {

    static contadorOrden = 0;

    Orden() {
        this._idOrden = ++Orden.contadorOrden;
    }

    constructor() {
        this.Orden();
        this._juegos = [];
    }

    agregarJuego(juego) {
        this._juegos.push(juego);
    }

    //calcula el total del costo de juegos comprados
    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this._juegos.length; i++) {
            total += this._juegos[i].precio;
        }
        return total;
    }

    //muestra la orden de juegos
    mostrarOrden() {
        let juegosEscodigos="";

        for(let j in this._juegos) {
            juegosEscodigos += this._juegos[j]+"\n";
        }

        let mensaje = "Gracias por comprar en GameStore\n" +
                      SEPARADOR + "\n" +
                      "Tu numero de orden es: " +this._idOrden+"\n"+
                      "Juegos escogidos: "+"\n"
                      +juegosEscodigos+
                      SEPARADOR + "\n" +
                      "Total de la compra: "+ this.calcularTotal();

        alert(mensaje);
    }

}
