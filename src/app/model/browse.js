import {obtenerOfertas} from "../services/endpoints.js";
import {obtenerEnlaceImagen} from "../util/images.js";

const storesAll = [
    {"id" : 1, "name" : "Steam", "icon" : "/img/stores/icons/0.png"},
    {"id": 2, "name": "GamersGate", "icon" : "/img/stores/icons/1.png"},
    {"id" : 3, "name" : "GreeManGaming", "icon" : "/img/stores/icons/2.png"},
    {"id": 6, "name": "Direct2Drive", "icon" : "/img/stores/icons/5.png"},
    {"id" : 7, "name" : "Gog", "icon" : "/img/stores/icons/6.png"},
    {"id" : 8, "name" : "Origin", "icon" : "/img/stores/icons/7.png"},
    {"id" : 11, "name" : "HumbleBundle", "icon" : "/img/stores/icons/10.png"},
    {"id" : 13, "name" : "Uplay", "icon" : "/img/stores/icons/12.png"},
    {"id" : 15, "name" : "Fanatical", "icon" : "/img/stores/icons/14.png"},
    {"id": 21, "name": "WinGameStore", "icon": "/img/stores/icons/20.png"},
    {"id": 23, "name": "GameBillet", "icon": "/img/stores/icons/22.png"},
    {"id": 24, "name": "Voidu", "icon": "/img/stores/icons/23.png"},
    {"id" : 25, "name" : "EpicGames", "icon" : "/img/stores/icons/24.png"},
    {"id": 27, "name": "Gamesplanet", "icon": "/img/stores/icons/26.png"},
    {"id": 28, "name": "Gamesload", "icon": "/img/stores/icons/27.png"},
    {"id": 29, "name": "2Game", "icon": "/img/stores/icons/28.png"},
    {"id": 30, "name": "IndieGala", "icon": "/img/stores/icons/29.png"},
    {"id" : 31, "name" : "BlizzardShop", "banner" : "/img/stores/icons/30.png"},
    {"id": 32, "name": "AllYouPlay", "icon": "/img/stores/icons/31.png"},
    {"id": 33, "name": "DLGamer", "icon": "/img/stores/icons/32.png"},
    {"id": 34, "name": "Noctre", "icon": "/img/stores/icons/33.png"}
];

const dealsTable = document.getElementById("dealsTable");

const renderDealsDataAll = async (storeTableName) => {

    const storeTable = document.getElementById(storeTableName);
    let ofertas = await obtenerOfertas();

    for ( const [index, data] of ofertas.entries() ) {

        const {storeID, savings, normalPrice, salePrice, thumb, title, externalURL, releaseDate} = data;

        //buscar datos de store a partir de ID
        const storeData = getStoreData(parseInt(storeID));

        let html = `
                    <tr>
                        <td class="is-vcentered"> 
                            <div class="is-flex is-justify-content-center"> ${ obtenerEnlaceImagen(storeData.icon,storeData.name) } </div> 
                        </td>
                        <td class="is-vcentered has-text-centered"> <span> ${ savings } %</span> </td>
                        <td class="is-vcentered has-text-centered">
                            <s class="is-size-7"> ${normalPrice}</s> 
                            <span class="has-text-weight-medium highlight-price">${salePrice}</span> 
                        </td>
                        <td class="is-vcentered">
                            <div class="is-flex is-align-content-center">
                                <span class="browse-thumb" style="background-image: url('${ thumb }');"> </span>                         
                                <span class="is-flex is-align-items-center"> <a class="has-text-white" href="${externalURL}" target="_blank">${title}</a>  </span>
                            </div>
                        </td>                                   
                    </tr>  
                    `;
        storeTable.innerHTML += html;

        /*if (index === 20) {
            break;
        }*/
    }

}

const getStoreData = (storeID) => {
    return storesAll.find(x => x.id === storeID);
}

//render default
renderDealsDataAll("dealsTable");