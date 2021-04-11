import {pizzaCartType} from "../../components/PizzaBlock/PizzasBlock";


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

export const cart = (state: CartState = initialState, action: ActionTypes): CartState => {
    switch (action.type) {
        case 'ADD_PIZZA_TYPE': {
            const newItems= {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }
            const allPizzas = [].concat.apply([], Object.values(newItems))
            const totalPrice = allPizzas.reduce((sum, obj: pizzaCartType)=> obj.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            }
        }
        default:
            return state
    }
}

//actions
export const setTotalCount = (count: number) => ({type: 'SET_TOTAL_COUNT', payload: count} as const)
export const setTotalPrice = (price: number) => ({type: 'SET_TOTAL_PRICE', payload: price} as const)
export const addPizzaToCart = (pizzaObj: pizzaCartType) => ({type: 'ADD_PIZZA_TYPE', payload: pizzaObj} as const)

//types
type CartState = {
    items: any;
    totalPrice: number;
    totalCount: number;
};
type ActionTypes =
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setTotalPrice>
    | ReturnType<typeof addPizzaToCart>
