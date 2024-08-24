export const ADD_CART = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

export const REMOVE_CART = (id) => {
    return {
        type: "REMOVE_TO_CART",
        payload: id
    }
}

export const INCREMENT_CART = (item) => {
    return {
        type: "INCREMENT_TO_CART",
        payload: item
    }
}

export const DECREMENT_CART = (item) => {
    return {
        type: "DECREMENT_TO_CART",
        payload: item
    }
}

export const UPDATE_QUANTITY = (id, quantity) => {
    return {
        type: "UPDATE_QUANTITY",
        payload: { id, quantity }
    }
}