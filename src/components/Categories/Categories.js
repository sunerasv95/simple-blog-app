import React from 'react';
import { Link } from 'react-router-dom';

import Category from './Category/Category';

import './Categories.css';

const Categories = (props) => {
    let categories = null;

    if(!props.categories){
        categories = <p>No categories found!</p>
    }else{
        // let categoryArr = Object.values(props.categories);
        categories = (
            
            Object.keys(props.categories).map(catKey => {
                return(
                    <Link className="Link" to={'/'+ catKey} key={catKey} 
                        onClick={props.clicked}>
                        <Category >
                            {props.categories[catKey]['categoryName']}
                        </Category>
                    </Link>
                );
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
