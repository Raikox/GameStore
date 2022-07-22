/*
API IGDB Games
https://api-docs.igdb.com/#about
autenticacion por oauth2
*/

const clientId = "815mxdjemjo3d1v5gbd9j60virro54";
const clientSecret = "voy2434e4kfpojjjddghnmuw6wgsbc";

//obtener token
const baseTokenURL = "https://id.twitch.tv/oauth2/token"; //aun no usada

//se usa url Local con los datos del token
const localURL = "src/app/services/access.json";

const obtenerToken = ( direccion ) => {
    let token;
    fetch(direccion)
        .then( (response) => response.json() )
        .then( (data) => {
            for (let content of data) {
                token = content;
            }
        })
    return token;
}





