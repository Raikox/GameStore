import {obtenerOfertasByStore} from "../services/endpoints.js";
import {obtenerEnlaceImagen} from "../util/images.js";

const dealsContainer = document.getElementById("dealsContainer");

const stores = [
    {"id" : 1, "name" : "Steam", "banner" : "/img/stores/banners/0.png"},
    {"id" : 25, "name" : "EpicGames", "banner" : "/img/stores/banners/24.png"},
    {"id" : 8, "name" : "Origin", "banner" : "/img/stores/banners/7.png"},
    {"id" : 11, "name" : "HumbleBundle", "banner" : "/img/stores/banners/10.png"},
    {"id" : 13, "name" : "Uplay", "banner" : "/img/stores/banners/12.png"},
    {"id" : 15, "name" : "Fanatical", "banner" : "/img/stores/banners/14.png"},
    {"id" : 7, "name" : "Gog", "banner" : "/img/stores/banners/6.png"},
    {"id" : 31, "name" : "BlizzardShop", "banner" : "/img/stores/banners/30.png"},
    {"id" : 3, "name" : "GreeManGaming", "banner" : "/img/stores/banners/2.png"}
];

const renderStoreHeader = (dealsContainer, storeID, storeName, storeBanner) => {

    let html = `<div class="is-flex  is-flex-direction-column deals${storeName} my-6">
                    <div class="is-flex is-justify-content-center">
                        <div class="store-banner mb-4">
                            <figure class="image" data-id="${storeID}">
                                ${obtenerEnlaceImagen(storeBanner, storeName)}
                            </figure>
                        </div>
                    </div>
                    <div class="is-flex is-justify-content-center is-align-content-center">
                        <table class="table table-single store-table">
                            <tbody id="${storeName}Table">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                `;
    dealsContainer.innerHTML += html;

}

const renderStoreData = async (storeID, storeTableName) => {

    const storeTable = document.getElementById(storeTableName);
    let ofertas = await obtenerOfertasByStore(storeID);

    for ( const [index, data] of ofertas.entries() ) {

        const {_dealID, _title, _normalPrice, _salePrice, externalURL} = data;

        let html = `
                    <tr>
                        <td class="left-side"> <a class="has-text-white" href="${externalURL}" target="_blank">${_title}</a> </td>
                        <td> <s class="is-size-7"> ${_normalPrice}</s> </td>
                        <td> <span class="has-text-weight-medium highlight-price">${_salePrice}</span> </td>
                    </tr>  
                    `;
        storeTable.innerHTML += html;

        if (index === 9) {
            break;
        }
    }

}

//render headers
for (let i=0 ; i < stores.length ; i++) {
    const {id, name, banner} = stores[i];
    renderStoreHeader(dealsContainer, id, name, banner);
}

//render data
for (let i=0 ; i < stores.length ; i++) {
    const {id, name} = stores[i];
    renderStoreData(id, name+"Table");
}