import React from 'react'

import Button from '../../UI/Button/Button';

import './Post.css';

const Post = (props) => {

    return(
        <div className="PostWrapper">
            <p className="Title">{props.title}</p>
            <p className="Body">{props.body}</p>
            <div className="PostFooter">
                <Button btnType="Default">
                    Read more
                </Button>
            </div>
        </div>
    );
}

export default Post;