import{
    CREATE_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
} from "./actionTypes";

export const createCart = (product) => {
    return{
        type:CREATE_TO_CART,
        payload: product,
    }
}

export const removeCart = (productId) => {
    return{
        type:REMOVE_FROM_CART,
        payload: productId,
    }
}

export const increaseQuantity = (productId) => {
    return{
        type:INCREASE_QUANTITY,
        payload: productId,
    }
}

export const decreaseQuantity = (productId) => {
    return{
        type:DECREASE_QUANTITY,
        payload: productId,
    }
}