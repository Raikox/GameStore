//get stores info
const obtenerTiendasAPI = async () => {
    try {
        const response = await axios.get("https://www.cheapshark.com/api/1.0/stores");
        return response.data;

    }catch (exception){
        console.log(exception);
    }
}
export const obtenerTiendas = async () => {
    let tiendas = [];
    await obtenerTiendasAPI()
        .then((info) => {
            info.forEach( tienda => {
                if(tienda.isActive === 1) {
                    tiendas.push(new Tienda(tienda.storeID, tienda.storeName, tienda.images));
                }
            });
        });
    return tiendas;
}

//get deals by store
export const obtenerOfertasAPI = async (tiendaID) => {
    try {
        const response = await axios.get("https://www.cheapshark.com/api/1.0/deals", {
            params: { storeID : tiendaID}
        });
        return response.data;

    }catch (exception){
        console.log(exception);
    }
}
export const obtenerOfertas = async (tiendaID) => {
    let ofertas = [];
    await obtenerOfertasAPI(tiendaID)
        .then((info) => {
            info.forEach( oferta => {
                ofertas.push(new Oferta(
                        oferta.thumb,
                        oferta.title,
                        "https://www.cheapshark.com/redirect?dealID=",
                        oferta.dealID,
                        oferta.savings,
                        oferta.normalPrice,
                        oferta.salePrice,
                        oferta.dealRating,
                        oferta.steamRatingText,
                        oferta.steamRatingPercent
                    ));
            });
        });
    return ofertas;
}

//get deals by game name
export const obtenerOfertasByTitleAPI = async (gameTitle) => {
    try {
        const response = await axios.get("https://www.cheapshark.com/api/1.0/deals", {
            params: { title : gameTitle}
        });
        return response.data;

    }catch (exception){
        console.log(exception);
    }
}
export const obtenerOfertasByTitle = async (gameTitle) => {
    let ofertas = [];
    await obtenerOfertasByTitleAPI(gameTitle)
        .then((info) => {
            info.forEach( oferta => {
                ofertas.push(new Oferta(
                    oferta.thumb,
                    oferta.title,
                    "https://www.cheapshark.com/redirect?dealID=",
                    oferta.dealID,
                    oferta.savings,
                    oferta.normalPrice,
                    oferta.salePrice,
                    oferta.dealRating,
                    oferta.steamRatingText,
                    oferta.steamRatingPercent
                ));
            });
        });
    return ofertas;
}