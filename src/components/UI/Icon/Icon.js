import React from 'react';

import './Icon.css';

const BackButton = (props) => {
    return(
        <span className="BackButton" onClick={props.clicked}>
            <i className={props.name} style={{ fontSize: props.size}}></i>
        </span>
    );
}

export default BackButton;