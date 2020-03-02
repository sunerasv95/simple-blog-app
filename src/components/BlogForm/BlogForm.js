import React from 'react';

import Button from '../UI/Button/Button';

import './BlogForm.css';

const BlogForm = (props) => {

    return(
        <div className="FormContainer">
            <div className="FormBody">
                <input className="InputField" 
                    type="text"
                    onChange={(event) => props.onChangeHandler('title', event.target.value)}
                    placeholder="Enter Title"
                    value={props.titleInput}/>
                <input className="InputField" 
                    type="text"
                    value={props.contentInput}
                    onChange={(event) => props.onChangeHandler('content', event.target.value)}
                    placeholder="Enter Content"/>
            </div>
            <div className="FormFooter">
                {props.mode === "edit" ? 
                    <Button btnType="Warning"
                        hasIcon={false}
                        clicked={props.submitHandler}
                        disabled={props.btnDisabled}>
                        Update
                    </Button> : 
                    <Button btnType="Success"
                        hasIcon={false}
                        clicked={props.submitHandler}
                        disabled={props.btnDisabled}>
                        Submit
                    </Button> }
            </div>
        </div>
    );
}

export default BlogForm;