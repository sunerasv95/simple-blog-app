import React from 'react';


import './Header.css';

const Header = (props) => {
    return(
        <div className="Header">
            <h4 className="HeaderTitle">{props.headerTitle}</h4>
            <hr className="HorizontalLine"/>
        </div>
    );
}

export default Header;