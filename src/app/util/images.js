
const baseURL = "https://www.cheapshark.com";

export const obtenerEnlaceImagen = (imageURL, storeName) => {
    let imageHTML = "";
    let imageFullURL = baseURL + imageURL;

    return imageHTML = `<img src="${imageFullURL}" alt="${storeName}">`;
};