import React from 'react'

import Button from '../../UI/Button/Button';

import './Post.css';

const Post = (props) => {

    return(
        <div className="PostWrapper">
            <p className="Title">{props.title}</p>
            <p className="Body">{props.body}</p>
            <div className="PostFooter">
                <Button 
                    hasIcon={true}
                    iconName="fa fa-eye"
                    iconSize={14}
                    btnType="Default">
                </Button>
                <Button 
                    hasIcon={true}
                    iconName="fa fa-pencil"
                    iconSize={14}
                    btnType="Warning">
                </Button>
                
            </div>
        </div>
    );
}

export default Post;