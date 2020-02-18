import React, { Component } from 'react';
import axios from '../../axios';

import Posts from '../../components/Posts/Posts';
import Header from '../../components/UI/Header/Header';
import Categories from '../../components/Categories/Categories';

import './Blog.css';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            categories: []
        }
    }

    componentDidMount() {
        this.getPosts();
        this.getCategories();
    }

    getPosts (){
        axios.get('blogs.json')
            .then(res =>{
                this.setState({ posts: res.data});
            })
            .catch(err => {
                console.log("Err", err);
            });
    }

    getCategories (){
        axios.get('categories.json')
            .then(res =>{
                this.setState({ categories : res.data});
            })
            .catch(err => {
                console.log("Err", err);
            });
    }

    render() {
        return (
            <div className="BlogContainer">
                <Categories categories={this.state.categories}/>
                <Header headerTitle="All Posts" />
                <Posts posts={this.state.posts}/>
            </div>
        );
    }
}

export default Blog;