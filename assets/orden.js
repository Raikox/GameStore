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

    //muestra la orden de juegos (DEPRECATED)
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

    mostrarOrdenHTML() {

        //numero de orden
        let encabezado = document.getElementById("numero-orden");
        encabezado.innerHTML = `<strong> Su numero de orden es: ${this._idOrden} </strong>`;

        //juegos de la orden
        let contenedorProductos = document.getElementById("productos-orden");
        contenedorProductos.innerHTML ="";
        this._juegos.forEach(
            producto => {
                const fila = `<tr>
                                <th> ${producto.idJuego} </th>
                                <td> ${producto.nombre} </td>
                                <td> ${producto.plataforma} </td>
                                <td> ${producto.precio} </td>
                              </tr>`;
                contenedorProductos.innerHTML += fila;
            }
        );

        //total de la orden
        let totalOrden = document.getElementById("total-orden");
        totalOrden.innerHTML = `<strong> Total de la orden: <span class="is-size-5">${this.calcularTotal()}</span> </strong>`;

    }

}
