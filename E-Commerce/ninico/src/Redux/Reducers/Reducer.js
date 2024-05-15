const initial_state = {
    carts : [],
    Wishlist : []
}

export const cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return{
                ...state,
                carts : [...state.carts, action.payload]
            }
        case "REMOVE_TO_CART":
            state.carts = state.carts.filter((item)=>item.id !== action.payload);
            console.log("filter ",state.carts)
            return{
                ...state,
                carts : [...state.carts]
            }

        case "INCREMENT_TO_CART":{
            let inc_cart = state.carts.map((item)=>{
                if(item.id == action.payload.id){
                    return{
                        ...item,
                        quantity : item.quantity + 1
                    }
                }
                return item
            })
            return{
                ...state,
                carts: inc_cart
            }
        }

        case "ADD_TO_WISHLIST":
            return{
                ...state,
                Wishlist : [...state.Wishlist, action.payload]
            }

        case "REMOVE_TO_WISHLIST":
            state.Wishlist = state.Wishlist.filter((item)=>item.id !== action.payload);
            console.log("filter ",state.Wishlist)
            return{
                ...state,
                Wishlist : [...state.Wishlist]
            }

        default:
            return state
    }
}