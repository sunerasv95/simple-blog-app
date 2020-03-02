import React, { Component } from 'react';
import axios from '../../axios';

import Header from '../UI/Header/Header';
import Spinner from '../UI/Spinner/Spinner';
import Modal from '../UI/Modal/Modal';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import BlogForm from '../BlogForm/BlogForm';

import './FullPost.css';


class FullPost extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            postId: null,
            post: null,
            controls: {
                title: {
                    value: ''
                },
                content: {
                    value: ''
                }
            },
            loading: false,
            mode: null
        }

    }

    componentDidMount() {

        let id, mode = null;

        id = this.props.match.params.pid;
        mode = this.props.location.state.mode;

        this.setState({ postId: id , mode: mode});

        this.getPostByIdHandler(id);
        
        //console.log("PROPS: ", mode);

    }

    getPostByIdHandler = (pid) => {
        this.setState({ loading: true });
        axios.get('blogs/'+pid+".json")
            .then(res =>{
                this.setState({
                    post: res.data,
                    loading: false,
                    controls: {
                        title: {
                            value: res.data.title
                        },
                        content: {
                            value: res.data.content
                        }
                    },
                    error: null
                });
                
                //console.log("FULL: ", res.data);
            })
            .catch(err => {
                this.setState({loading: false });
                console.log("ERROR: ", err); 
            })
       
    }

    updateInputStateHandler = (key, value) =>{
        this.setState(prevState => {
            return{
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value
                    }
                }
            }
        });

        //console.log('KEY:'+ key + " "+ "VAL: "+ value);
    }

    goBackHandler = () => {
        this.props.history.goBack();
    }

    updatePostHandler = () => {
        
        this.setState({ loading: true, disableBtn: true });

        if(this.state.controls.title.value === "" || 
            this.state.controls.content.value === ""){
            this.setState({ error : true, loading: false, disableBtn: false });
            alert("All fields are required!");
        }else{
            let updatedPost = {
                title: this.state.controls.title.value,
                content: this.state.controls.content.value
            }
            axios.put('blogs/'+ this.state.postId +'.json', 
                updatedPost , 
                { headers: {"Content-Type": "application/json"}} )
                .then( res => {
                    this.setState({ error: false , loading: false, disableBtn: false });
                    console.log("RES: ", res);
                })
                .catch(err => {
                    this.setState({ error: true , loading: false, disableBtn: false });
                    console.log("ERROR: "+ err);
                });
        }
        console.log();
    }

    render() {
        let renderContent = null;
        if(this.state.post !== null && this.state.mode === "view"){
            renderContent = (
                <Wrapper>
                    <Header 
                        headerTitle={this.state.post.title} 
                        backBtn={true} 
                        goBack={this.goBackHandler.bind()}
                        />
                    <div className="PostContent">
                        <p>{this.state.post.content}</p>
                    </div>
                </Wrapper>    
            );
        }else if(this.state.post !== null && this.state.mode === "edit"){
            renderContent = (
                <Wrapper>
                    <Header 
                        headerTitle="Update post" 
                        backBtn={true} 
                        goBack={this.goBackHandler.bind()}/>
                    <BlogForm 
                        titleInput={this.state.controls.title.value}
                        contentInput={this.state.controls.content.value}
                        onChangeHandler={this.updateInputStateHandler}
                        submitHandler={this.updatePostHandler}
                        mode="edit"/>
                </Wrapper>
            );
        }
        return(
            <div className="FullPost">
                {renderContent}
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

export default FullPost;