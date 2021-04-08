import {pizzasType} from "../../App";

type initialStateType = typeof initialState
const initialState = {
    items: [] as Array<pizzasType>,

}

export const pizzas = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case 'SET_PIZZAS': {
            return {
                ...state,
                items: action.payload,
            }
        }
        default:
            return state
    }
}

