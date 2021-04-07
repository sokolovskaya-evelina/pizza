import React, {useEffect, useState} from 'react';
import './App.css';
import './scss/app.scss'
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom'

const App = () => {
    const [pizzas, setPizzas]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/db.json')
            .then(res=>res.json())
            .then(json=>{
                setPizzas(json.pizzas)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' render={()=><Home items={pizzas}/>}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    );
}

export default App;
