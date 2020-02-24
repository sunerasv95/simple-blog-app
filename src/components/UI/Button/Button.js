import React from 'react';

import Icon from '../Icon/Icon';

import './Button.css';

const Button = (props) => {
    return(
    <button 
        className={["Button", props.btnType].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}>
        {props.children}
        {props.hasIcon ? 
            <Icon name={props.iconName}
            size={props.iconSize}/> : null}
    </button>
    );
}

export default Button;