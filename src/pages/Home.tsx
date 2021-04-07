import React from 'react';
import {Categories, PizzasBlock, SortPopup} from "../components";

type PropsType={
    item: Array<string>
}
const Home = () => {
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
                <SortPopup items={['популярности','цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                <PizzasBlock/>
            </div>
        </div>
    );
};

export default Home;