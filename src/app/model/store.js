import {obtenerOfertas} from "../services/endpoints.js";

const storeImageContainer = document.getElementById("storeImage");
const storeNameContainer = document.getElementById("storeName");
const dealsTable = document.getElementById("dealsTable");

window.addEventListener("load", () => {

    const storeID = localStorage.getItem("storeID");
    const storeImage = localStorage.getItem("storeImage");
    const storeTitle = localStorage.getItem("storeTitle");

    renderStoreHead(storeImage, storeTitle);
    renderOfertas(dealsTable, storeID);
});

const renderStoreHead = (storeImage, storeTitle) => {

    let contentImage = `
                        <figure class="image is-128x128">
                            <img src="${storeImage}" alt="${storeTitle}">
                        </figure>                         
                        `;

    let contentTitle = `                        
                        <h1 class="title has-text-weight-normal">${storeTitle}</h1>                        
                        `;

    storeImageContainer.innerHTML = contentImage;
    storeNameContainer.innerHTML = contentTitle;

};

const renderOfertas = async (dealsTable, storeID) => {

    let ofertas = await obtenerOfertas(storeID);


};

