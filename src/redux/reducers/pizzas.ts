import {pizzasType} from "../../App";
import {Dispatch} from "redux";
import {pizzasAPI} from "../../API/api";
import {sortType} from "../../components/SortPopup";

const initialState = {
    items: [] as Array<pizzasType>,
    isLoaded: false
}

export const pizzas = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "SET_PIZZAS": {
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        }
        case "SET_LOADED": {
            return {
                ...state,
                isLoaded: action.payload
            }
        }
        default:
            return state
    }
}

//actions
export const setLoaded = (payload: boolean) => ({type: 'SET_LOADED', payload} as const)
export const setPizzas = (items: Array<pizzasType>) => ({type: 'SET_PIZZAS', payload: items} as const)

//thunks
export const fetchPizzas = (sortBy: sortType, category: number | null) =>
    (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(setLoaded(false))
        pizzasAPI.getPizzas(sortBy, category)
            .then(res => {
                dispatch(setPizzas(res))
            })
    }

//types
type initialStateType = typeof initialState
type ActionsTypes =
    | ReturnType<typeof setPizzas>
    | ReturnType<typeof setLoaded>
