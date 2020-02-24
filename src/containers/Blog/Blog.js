import React, { Component } from 'react';
import axios from '../../axios';

import Posts from '../../components/Posts/Posts';
import Header from '../../components/UI/Header/Header';
import Categories from '../../components/Categories/Categories';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import './Blog.css';

// const categoryLoaded = {
//     id001 : {
//         title : "Category Loaded title 01",
//         content: "Category Loaded content 01"
//     },
//     id002 : {
//         title : "Category Loaded title 02",
//         content: "Category Loaded content 02"
//     },
//     id003 : {
//         title : "Category Loaded title 03",
//         content: "Category Loaded content 03"
//     }
// }

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            categories: [],
            loading: false

        }
    }

    componentDidMount() {
        this.getPosts();
        this.getCategories();
        //console.log("BLOG PROPS: ", this.props);
    }


    getPosts = () => {
        this.setState({ loading: true });
        axios.get('blogs.json')
            .then(res =>{
                this.setState({ posts: res.data, loading: false});
            })
            .catch(err => {
                this.setState({ loading: false });
                console.log("Err", err);
            });
    }

    getCategories = () =>{
        axios.get('categories.json')
            .then(res =>{
                this.setState({ categories : res.data});
                //console.log("Categories: ", this.state.categories);
            })
            .catch(err => {
                console.log("Err", err);
            });
    }

    // getSelectedCategory = () => {
    //     console.log("PROPS ID: ", this.props.match.params.id);
    // }

    // getPostsBySelectedCategories = () => {
    //     this.setState(prevState => {
    //         return{
    //             ...prevState.posts,
    //             posts: categoryLoaded
    //         }
    //     })

    //     console.log("Posts loaded by category: ", this.state.posts);
    // }

    render() {
        return (
            <div className="BlogContainer">
                <Categories 
                    categories={this.state.categories} 
                    clicked={this.getSelectedCategory}/>
                <Header headerTitle="All Posts" />
                <Posts posts={this.state.posts}/> 
                {this.state.loading ? 
                    <Modal show={this.state.loading}>
                        <Spinner status="Loading posts.."/>
                    </Modal>
                    : null
                }
                
            </div>
        );
    }
}

export default Blog;