import React from 'react';
import {Categories, PizzasBlock, SortPopup} from "../components";
import {pizzasType, } from "../App";

type PropsType={
    items: Array<pizzasType>
}
const Home: React.FC<PropsType> = ({items}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={[
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые'
                ]}/>
                <SortPopup items={[{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'}]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(item=><PizzasBlock key={item.id} {...item}/>)}
            </div>
        </div>
    );
};

export default Home;