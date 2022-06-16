class Juego {
    static contadorJuego = 0;

    Juego(){
        this._idJuego = ++Juego.contadorJuego;
    }

    constructor(nombre, plataforma, precio) {
        this.Juego();
        this._nombre = nombre;
        this._plataforma = plataforma;
        this._precio = precio;
    }

    get idJuego() {
        return this._idJuego;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get plataforma() {
        return this._plataforma;
    }

    set plataforma(value) {
        this._plataforma = value;
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }

    toString() {
        return "Codigo: " + this._idJuego + " Juego: " + this._nombre + " Plataforma: " + this._plataforma + " Precio: " +this._precio;
    }

}

