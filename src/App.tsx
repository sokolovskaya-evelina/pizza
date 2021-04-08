import React, {useEffect} from 'react';
import './App.css';
import './scss/app.scss'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";
import {reduxStoreType} from "./redux/srore";

export type pizzasType = {
    id: number
    imageUrl: string
    name: string
    types: Array<number>
    sizes: Array<number>
    price: number
    category: number
    rating: number
}
type ResponsePizzasType = {
    pizzas: pizzasType[]
}

const App = () => {
    const pizzas = useSelector<reduxStoreType, Array<pizzasType>>(state => state.pizzas.items)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get<ResponsePizzasType>(('http://localhost:3000/db.json'))
            .then(res => dispatch(setPizzas(res.data.pizzas)))
    }, [dispatch])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' render={() => <Home items={pizzas}/>}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    );
}

export default App;
