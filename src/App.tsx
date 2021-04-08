import React, {useEffect} from 'react';
import './App.css';
import './scss/app.scss'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom'
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";

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

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get<Array<pizzasType>>(('http://localhost:3001/pizzas'))
            .then(res => dispatch(setPizzas(res.data)))
    }, [dispatch])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    );
}

export default App;
