import React, {useCallback} from 'react';
import {Categories, PizzasBlock, SortPopup} from "../components";
import {pizzasType,} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {reduxStoreType} from "../redux/srore";
import {setCategory} from "../redux/actions/filters";

const categoryNames=['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}]

const Home = React.memo(() => {
    const dispatch = useDispatch()
    const pizzas = useSelector<reduxStoreType, Array<pizzasType>>(state => {
        return state.pizzas.items
    })

    const changeCategory = useCallback((index: number | null) => {
        dispatch(setCategory(index))
    }, [dispatch])
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryNames}
                            onClickItem={changeCategory}
                />
                <SortPopup items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map(item => <PizzasBlock key={item.id} {...item}/>)}
            </div>
        </div>
    );
})

export default Home;