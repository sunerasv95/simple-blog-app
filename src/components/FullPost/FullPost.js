import React from 'react';

import Header from '../UI/Header/Header';

import './FullPost.css';

const FullPost = (props) => {
    return(
        <div className="FullPost">
            <Header headerTitle="View Post"/>
            <div className="PostContent">
                <h1>This is Sample Title</h1>
                <p>
                    I also don't appreciate only have options of splitting columns into 12 columns or less.
                    I also don't appreciate only have options of splitting columns into 12 columns or less.
                    I also don't appreciate only have options of splitting columns into 12 columns or less.
                </p>
            </div>
        </div>
    );
}

export default FullPost;