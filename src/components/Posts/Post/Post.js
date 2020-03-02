import React from 'react'
import { Link } from 'react-router-dom';

import Button from '../../UI/Button/Button';

import './Post.css';

const Post = (props) => {

    return(
        <div className="PostWrapper">
            <p className="Title">{props.title}</p>
            <p className="Body">{props.body}</p>
            <div className="PostFooter">
                <Link className="Link" 
                    to={{ pathname: "/view/" + props.id, state:{ mode : "view" }}}>
                    <Button
                        hasIcon={true}
                        iconName="fa fa-eye"
                        iconSize={14}
                        btnType="Default">
                    </Button>
                </Link>
                <Link className="Link" 
                    to={{ pathname: "/edit/" + props.id , state:{ mode : "edit" }}} >
                    <Button
                        hasIcon={true}
                        iconName="fa fa-pencil"
                        iconSize={14}
                        btnType="Warning">
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Post;