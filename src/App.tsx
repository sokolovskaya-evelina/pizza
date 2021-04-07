import React, {useEffect, useState} from 'react';
import './App.css';
import './scss/app.scss'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom'
import axios from "axios";

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
    const [pizzas, setPizzas] = useState<Array<pizzasType>>([])
    useEffect(() => {
        axios.get<ResponsePizzasType>(('http://localhost:3000/db.json'))
            .then(res => setPizzas(res.data.pizzas))
    }, [])

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
