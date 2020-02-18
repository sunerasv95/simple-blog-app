import React from 'react';

import Category from './Category/Category';

import './Categories.css';

const Categories = (props) => {
    let categories = null;

    if(!props.categories){
        categories = <p>No categories found!</p>
    }else{
        let categoryArr = Object.values(props.categories);
        categories = (
            categoryArr.map((item, index) => {
                return(
                    <Category key={index}>
                        {item.categoryName}
                    </Category>
                )
            })
        );
    }

    return(
        <div className="Categories">
            { categories }
        </div>
    );
}

export default Categories;
