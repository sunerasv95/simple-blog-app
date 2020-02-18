import React from 'react';

import Post from './Post/Post';

import './Posts.css';

const Posts = (props) =>{

        let posts = null;

        if (props.posts == null){
            posts = <p>No Posts!</p>; 
        }else if(props.posts != null){
            let postsArr = null;
            postsArr = Object.values(props.posts);
            posts = (
                <ul className="PostsContainer">
                    {postsArr.map((item, index) => {
                        return (
                            <li key={index}>
                                <Post
                                    id={index}
                                    title={item.title}
                                    body={item.content} />
                            </li>        
                        )
                        //console.log("ITEM: ", item.title);
                    })}
                </ul>
            );
        }

        

        return(
            <div className="Posts">
                <div>
                    {posts}
                </div>
            </div>
        );

}

export default Posts;