import {obtenerOfertasByStore, obtenerTiendas} from "../services/endpoints.js";
import {obtenerEnlaceImagen} from "../util/images.js";
import {eventHandler} from "../util/handler.js";

const storesContainer = document.getElementById("storesContainer");
const humbleContainer = document.getElementById("humbleContainer");

//muestra las 3 primeras tiendas obtenidas del api
const renderTiendas = async (storesContainer) => {

    let tiendas = await obtenerTiendas();

    for ( const [index, data] of tiendas.entries() ) { //destructuracion

        if (index < 3) {
            const {_storeID, _storeName, _images} = data;

            let html = ` 
                        <div class="column is-flex is-justify-content-center">                       
                            <div class="is-flex is-flex-direction-column store-card-container">                            
                                <div class="is-flex is-justify-content-center">
                                    <figure class="image is-128x128" data-id="${_storeID}">
                                        ${ obtenerEnlaceImagen(_images.logo,_storeName) }
                                    </figure> 
                                </div>                           
                                <div class="content is-flex is-justify-content-center mt-4">
                                    <p class="title is-4">${_storeName}</p>
                                </div>
                            </div>                        
                       </div>
                        `;

            storesContainer.innerHTML += html;
        }
    }

    //generate clic event on images
    /*eventHandler(document,"click",".store-card", e => {

        const imgElement = e.target;
        const figureElement = imgElement.parentNode;
        const contenedorElement = figureElement.parentNode.parentNode;
        const titleElement = contenedorElement.lastElementChild.firstElementChild;

        localStorage.setItem("storeID", figureElement.dataset.id);
        localStorage.setItem("storeImage", imgElement.src);
        localStorage.setItem("storeTitle", titleElement.innerHTML);

        window.open("./store.html","_self");

    });*/
}

//muestra ofertas de la humbleStore
const renderHumbleHead = (humbleContainer, storeID, storeName) => {

    humbleContainer.innerHTML = `<div class="is-flex is-justify-content-center is-flex-direction-column">
                                    <div class="is-flex is-justify-content-center">
                                        <div class="store-banner mb-4">
                                            <figure class="image" data-id="${storeID}">
                                                ${obtenerEnlaceImagen("/img/stores/banners/10.png", storeName)}
                                            </figure>
                                        </div>
                                    </div>
                                    <div>
                                        <table class="table table-single">
                                            <tbody id="humbleTable">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                `;

}

const renderHumbleData = async (storeID) => {

    const humbleTable = document.getElementById("humbleTable");
    let ofertas = await obtenerOfertasByStore(storeID);

    for ( const [index, data] of ofertas.entries() ) {

        if (index < 10) {

            const {_dealID, _title, _normalPrice, _salePrice, externalURL} = data;

            let html = `
                        <tr>
                            <td> <a href="${externalURL}" target="_blank">${_title}</a> </td>
                            <td> <s class="is-size-7"> ${_normalPrice}</s> </td>
                            <td> <span class="has-text-weight-medium">${_salePrice}</span> </td>
                        </tr>  
                        `;
            humbleTable.innerHTML += html;
        }

    }

}

renderTiendas(storesContainer);
renderHumbleHead(humbleContainer,11,"HumbleBundle");
renderHumbleData(11);