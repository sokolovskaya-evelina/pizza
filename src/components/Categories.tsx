import React from 'react';

type PropsType = {
    items: Array<string>
    onClickCategory: (index: null | number) => void
    activeCategory: number | null

}

const Categories: React.FC<PropsType> = React.memo(({items, onClickCategory, activeCategory}) => {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => {
                        onClickCategory(null)
                    }}>
                    Все
                </li>
                {items &&
                items.map((item, index) =>
                    <li className={index === activeCategory ? 'active' : ''}
                        key={`${item}_${index}`}
                        onClick={() => onClickCategory(index)}>
                        {item}
                    </li>)}
            </ul>
        </div>
    );
})

export default Categories;