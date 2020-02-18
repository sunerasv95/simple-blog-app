import React from 'react';

import './Category.css';

const Category = (props) => {
    return(
        <div className="Category">
            {props.children}
        </div>
    );
}

export default Category;