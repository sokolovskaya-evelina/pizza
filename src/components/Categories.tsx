import React, {useState} from 'react';

type PropsType = {
    items: Array<string>
}


const Categories: React.FC<PropsType> = ({items}) => {
    const [activeItem, setActiveItem] = useState<number | null>(null)

    const onSelectItem = (index: number | null) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => {
                        onSelectItem(null)
                    }}>
                    Все
                </li>
                {items && items.map((item, index) =>
                    <li className={index === activeItem ? 'active' : ''}
                        key={`${item}_${index}`}
                        onClick={() => onSelectItem(index)}>
                        {item}
                    </li>)}
            </ul>
        </div>
    );
};

export default Categories;