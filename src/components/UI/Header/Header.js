import React from 'react';

import Icon from '../Icon/Icon';

import './Header.css';

const Header = (props) => {

    let backBtn = null;

    if(props.backBtn){
        backBtn = (
            <Icon name="fa fa-arrow-left"
                size={22}
                clicked={props.goBack} />
        );
    }

    return(
        <div className="HeaderContainer">
            <div className="Header">
                {backBtn}
                <h4 className="HeaderTitle">{props.headerTitle}</h4>
            </div>
            <hr className="HorizontalLine"/>
        </div>
    );
}

export default Header;