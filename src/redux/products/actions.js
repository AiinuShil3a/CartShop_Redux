import{
    CREATE_PRODUCT,
    CREATE_QUANTITY,
    REMOVE_QUANTITY,
    FILTER_BY_CATEGORY,
} from "./actionTypes";

export const createProduct = (product) => {
    return{
        type:CREATE_PRODUCT,
        payload: product,
    }
}

export const createQuantity = (productId,quantity) => {
    return{
        type:CREATE_QUANTITY,
        payload: {productId,quantity},
    }
}

export const removeQuantity = (productId) => {
    return{
        type:REMOVE_QUANTITY,
        payload: productId,
    }
}

export const filterByCategory = (filter) => {
    return{
        type:FILTER_BY_CATEGORY,
        payload: {filter},
    }
}