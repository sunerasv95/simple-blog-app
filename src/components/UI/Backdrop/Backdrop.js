import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
    return(
        props.show ? 
        <div className="Backdrop">
            {props.children}
        </div> : null
    );
}

export default Backdrop;