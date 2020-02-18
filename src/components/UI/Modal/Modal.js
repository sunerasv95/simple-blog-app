import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

import './Modal.css';

const Modal = (props) => {
    return(
        <Wrapper>
            <Backdrop show={props.show}>
                <div className="Modal">
                    {props.children}
                </div>
            </Backdrop>
        </Wrapper>
    );
}

export default Modal;   