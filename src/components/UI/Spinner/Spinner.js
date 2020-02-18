import React from 'react';

import './Spinner.css';

const Spinner = (props) => {
    return(
        <div className="LoaderContainer">
            <div className="Loader"></div>
            <p className="Loading">{props.status}...</p>
        </div>
    );
}

export default Spinner;