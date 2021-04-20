import React, {useCallback, useEffect} from 'react';
import {Categories, PizzasBlock, SortPopup} from "../components";
import {pizzasType,} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {reduxStoreType} from "../redux/store";
import PizzaLoader from "../components/PizzaBlock/PizzaLoader";
import {fetchPizzas} from "../redux/reducers/pizzas";
import {setCategory, setSortBy} from "../redux/reducers/filters";
import {itemsType} from "../components/SortPopup";
import {pizzaCartType} from "../components/PizzaBlock/PizzasBlock";
import {addPizzaToCart} from "../redux/reducers/cart";

type HomeStoreType = {
    category: number | null
    sortBy: {
        type: string
        order: string
    }
}

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems: Array<itemsType> = [
    {name: 'популярности', type: 'popular', order: 'desk'},
    {name: 'цене', type: 'price', order: 'desk'},
    {name: 'алфавиту', type: 'name', order: 'ask'}
]

const Home = React.memo(() => {
    const dispatch = useDispatch()
    const pizzas = useSelector<reduxStoreType, Array<pizzasType>>(state => state.pizzas.items)
    const isLoaded = useSelector<reduxStoreType, boolean>(state => state.pizzas.isLoaded)
    const cartItems = useSelector<reduxStoreType, any>(state => state.cart.items)
    const {category, sortBy} =
        useSelector<reduxStoreType, HomeStoreType>(({filters}) => filters)

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [dispatch, category, sortBy])

    const onSelectCategory = useCallback((index: number | null) => {
        dispatch(setCategory(index))
    }, [dispatch])
    const onSelectSortType = useCallback((obj: { type: string, order: string }) => {
        dispatch(setSortBy(obj))
    }, [dispatch])
    const handleAddPizzaToCart = useCallback((pizzaObj: pizzaCartType) => {
        dispatch(addPizzaToCart(pizzaObj))
    }, [dispatch])

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryNames}
                            onClickCategory={onSelectCategory}
                            activeCategory={category}
                />
                <SortPopup activeSortType={sortBy.type}
                           items={sortItems}
                           onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? pizzas.map(item => <PizzasBlock key={item.id}
                                                      {...item}
                                                      onClickAddPizza={handleAddPizzaToCart}
                                                      addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                    />)
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <PizzaLoader key={index}/>)
                }
            </div>
        </div>
    );
})

export default Home;