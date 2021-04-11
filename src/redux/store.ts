import {applyMiddleware, combineReducers, createStore} from "redux"
import {filters} from "./reducers/filters";
import {cart} from "./reducers/cart";
import {pizzas} from "./reducers/pizzas";
import thunk from 'redux-thunk'


export type reduxStoreType = ReturnType<typeof reducers>

let reducers = combineReducers({
    filters,
    cart,
    pizzas
})

let store = createStore(reducers, applyMiddleware(thunk))
// @ts-ignore
window.store = store;
export default store