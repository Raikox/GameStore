class Tienda {
    constructor(storeID, storeName, images) {
        this._storeID = storeID;
        this._storeName = storeName;
        this._images = images;
    }

    get storeID() {
        return this._storeID;
    }

    set storeID(value) {
        this._storeID = value;
    }

    get storeName() {
        return this._storeName;
    }

    set storeName(value) {
        this._storeName = value;
    }

    get images() {
        return this._images;
    }

    set images(value) {
        this._images = value;
    }
}