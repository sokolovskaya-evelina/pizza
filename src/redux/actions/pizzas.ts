import {pizzasType} from "../../App";

export const setPizzas = (items: Array<pizzasType>) => ({type: 'SET_PIZZAS', payload: items})
