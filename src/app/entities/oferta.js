class Oferta {
    constructor(thumb, title, baseURL, dealID, savings, normalPrice, salePrice, dealRating, steamRatingText, steamRatingPercent) {

        this._thumb = thumb;
        this._title = title;
        this._baseURL = baseURL;
        this._dealID = dealID;
        this._savings = savings;
        this._normalPrice = normalPrice;
        this._salePrice = salePrice;
        this._dealRating = dealRating;
        this._steamRatingText = steamRatingText;
        this._steamRatingPercent = steamRatingPercent;
    }


    get thumb() {
        return this._thumb;
    }

    set thumb(value) {
        this._thumb = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get baseURL() {
        return this._baseURL;
    }

    set baseURL(value) {
        this._baseURL = value;
    }

    get dealID() {
        return this._dealID;
    }

    set dealID(value) {
        this._dealID = value;
    }

    get savings() {
        return this._savings;
    }

    set savings(value) {
        this._savings = value;
    }

    get normalPrice() {
        return this._normalPrice;
    }

    set normalPrice(value) {
        this._normalPrice = value;
    }

    get salePrice() {
        return this._salePrice;
    }

    set salePrice(value) {
        this._salePrice = value;
    }

    get dealRating() {
        return this._dealRating;
    }

    set dealRating(value) {
        this._dealRating = value;
    }

    get steamRatingText() {
        return this._steamRatingText;
    }

    set steamRatingText(value) {
        this._steamRatingText = value;
    }

    get steamRatingPercent() {
        return this._steamRatingPercent;
    }

    set steamRatingPercent(value) {
        this._steamRatingPercent = value;
    }

    get externalURL() {
        return this._baseURL + this._dealID;
    }
}