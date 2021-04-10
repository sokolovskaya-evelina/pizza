import axios from "axios";
import {pizzasType} from "../App";
import {sortType} from "../components/SortPopup";


const instance = axios.create({
    baseURL: 'http://localhost:3001/pizzas',

})

//API
export const pizzasAPI = {
    getPizzas(sortBy: sortType, category: number | null) {
        return instance.get<Array<pizzasType>>(`?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
            .then(res => res.data)
    }
}