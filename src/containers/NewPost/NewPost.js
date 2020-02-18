import React, { Component } from 'react';

import axios from '../../axios';

import BlogForm from '../../components/BlogForm/BlogForm';
import Header from '../../components/UI/Header/Header';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

class NewPost extends Component{

    constructor(props) {
        super(props);
        this.state ={
            controls: {
                title: {
                    value: ''
                },
                content: {
                    value: ''
                }
            },
            loading: false,
            error: false,
            disableBtn: false
        }

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

    submitPostHandler = () =>{

        this.setState({ loading: true, disableBtn: true });

        if(this.state.controls.title.value === "" || 
            this.state.controls.content.value === ""){
            this.setState({ error : true, loading: false, disableBtn: false });
            alert("All fields are required!");
        }else{
            let blog = {
                title: this.state.controls.title.value,
                content: this.state.controls.content.value
            }
            axios.post('blogs.json', blog)
                .then( res => {
                    this.setState({ error: false , loading: false, disableBtn: false });
                    this.resetInputFields();
                    console.log("RES: ", res);
                })
                .catch(err => {
                    this.setState({ error: true , loading: false, disableBtn: false });
                    console.log("ERROR: "+ err);
                });
        }
        //alert("test");
    }

    resetInputFields(){
        this.setState(prevState =>{
            return{
                controls: {
                    ...prevState.controls,
                    title: {
                        ...prevState.controls.title,
                        value: ''
                    },
                    content: {
                        ...prevState.controls.content,
                        value: ''
                    }
                },
            }
        });
    }
    
    render() {
        return(
            <div className="NewPostContainer">
                
                <Header headerTitle="Create your post"/>
                <BlogForm 
                    titleInput={this.state.controls.title.value}
                    contentInput={this.state.controls.content.value}
                    onChangeHandler={this.updateInputStateHandler}
                    submitHandler={this.submitPostHandler}
                    btnDisabled={this.state.disableBtn}
                />
                <Modal show={this.state.loading}>
                    <Spinner status="Submitting your post"/>
                </Modal>
            </div>
        );
    }
}

export default NewPost;