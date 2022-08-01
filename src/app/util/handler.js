//metodo para agregar eventos a elementos
export const eventHandler = (element, event, selector, handler) => {
    element.addEventListener( event, e => {

        //obtiene donde se lanzo el evento y devuelve el ascendiente mas cercano
        if( e.target.closest(selector) ){
            handler(e);
        }
    });
};

