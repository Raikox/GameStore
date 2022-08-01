import {obtenerTiendas} from "../services/endpoints.js";
import {obtenerEnlaceImagen} from "../util/images.js";
import {eventHandler} from "../util/handler.js";

const storesContainer = document.getElementById("storesContainer");

//muestra las 3 primeras tiendas obtenidas del api
const renderTiendas = async (storesContainer) => {

    let tiendas = await obtenerTiendas();

    for ( const [index, data] of tiendas.entries() ) { //destructuracion

        if (index < 3) {
            const {_storeID, _storeName, _images} = data;

            let column = ` 
                        <div class="column is-flex is-justify-content-center">                       
                            <div class="is-flex is-flex-direction-column store-card-container">                            
                                <div class="is-flex is-justify-content-center">
                                    <figure class="store-card image is-128x128" data-id="${_storeID}">
                                        ${ obtenerEnlaceImagen(_images.logo,_storeName) }
                                    </figure> 
                                </div>                           
                                <div class="content is-flex is-justify-content-center mt-4">
                                    <p class="title is-4">${_storeName}</p>
                                </div>
                            </div>                        
                       </div>
                        `;

            storesContainer.innerHTML += column;
        }
    }

    eventHandler(document,"click",".store-card", e => {

        const imgElement = e.target;
        const figureElement = imgElement.parentNode;
        const contenedorElement = figureElement.parentNode.parentNode;
        const titleElement = contenedorElement.lastElementChild.firstElementChild;

        localStorage.setItem("storeID", figureElement.dataset.id);
        localStorage.setItem("storeImage", imgElement.src);
        localStorage.setItem("storeTitle", titleElement.innerHTML);

        window.open("./store.html","_self");

    });
}

renderTiendas(storesContainer);