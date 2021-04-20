import {pizzaCartType} from "../../components/PizzaBlock/PizzasBlock"

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}
const getTotalPrice = (arr: Array<any>) => arr.reduce((sum, obj: pizzaCartType) => obj.price + sum, 0)

export const cart = (state: CartState = initialState, action: ActionTypes): CartState => {
    switch (action.type) {
        case 'ADD_PIZZA_TYPE': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                }
            }
            const totalCount = Object.keys(newItems).reduce(
                (sum: any, key: any) => newItems[key].items.length + sum,
                0
            )
            const totalPrice = Object.keys(newItems).reduce(
                (sum: any, key: any) => newItems[key].totalPrice + sum,
                0
            )

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }
        case "CLEAR_CART":
            return {items: {}, totalPrice: 0, totalCount: 0}
        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items,
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        }
        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ]
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            }
            const totalCount = Object.keys(newItems).reduce(
                (sum: any, key: any) => newItems[key].items.length + sum,
                0
            )
            const totalPrice = Object.keys(newItems).reduce(
                (sum: any, key: any) => newItems[key].totalPrice + sum,
                0
            )

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }

        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            }
            const totalCount = Object.keys(newItems).reduce(
                (sum: any, key: any) => newItems[key].items.length + sum,
                0
            )
            const totalPrice = Object.keys(newItems).reduce(
                (sum: any, key: any) => newItems[key].totalPrice + sum,
                0
            )

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }

        default:
            return state
    }
}

//actions
export const addPizzaToCart = (pizzaObj: pizzaCartType) => ({type: 'ADD_PIZZA_TYPE', payload: pizzaObj} as const)
export const clearCart = () => ({type: 'CLEAR_CART'} as const)
export const removeCartItem = (id: number) => ({type: 'REMOVE_CART_ITEM', payload: id} as const)
export const plusCartItem = (id: number) => ({type: 'PLUS_CART_ITEM', payload: id} as const)
export const minusCartItem = (id: number) => ({type: 'MINUS_CART_ITEM', payload: id} as const)

//types
export type CartState = {
    items: any
    totalPrice: number
    totalCount: number
}
type ActionTypes =
    | ReturnType<typeof addPizzaToCart>
    | ReturnType<typeof clearCart>
    | ReturnType<typeof removeCartItem>
    | ReturnType<typeof plusCartItem>
    | ReturnType<typeof minusCartItem>
