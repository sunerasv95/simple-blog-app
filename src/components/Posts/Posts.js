import React from 'react';
import { Link } from 'react-router-dom';

import Post from './Post/Post';

import './Posts.css';

const Posts = (props) =>{

        let posts = null;

        if (props.posts == null){
            posts = <p>No Posts!</p>; 
        }else if(props.posts != null){
            let postsObj = props.posts;
            //postsArr = Object.values(props.posts);
            posts = (
                Object.keys(postsObj).map(postKey => {
                    return (
                        <Link key={postKey} className="Link" to={"/view/" + postKey}>
                            <li>
                                <Post
                                    id={postKey}
                                    title={postsObj[postKey]['title']}
                                    body={postsObj[postKey]['content']} />
                            </li>
                        </Link>
                    )
                })
            );
        }

        

        return(
            <div className="Posts">
                <div>
                    <ul className="PostsContainer">
                        {posts}
                    </ul>
                </div>
            </div>
        );

}

export default Posts;