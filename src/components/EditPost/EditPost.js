// import React, { Component } from 'react';
// import axios from '../../axios';

// import Header from '../UI/Header/Header';
// import Spinner from '../UI/Spinner/Spinner';
// import Modal from '../UI/Modal/Modal';
// import Wrapper from '../../hoc/Wrapper/Wrapper';

// import './FullPost.css';


// class FullPost extends Component{
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             post: null,
//             postId: null,
//             loading: false
//         }

//     }

//     componentDidMount() {
//         let id = null;
//         id = this.props.match.params.pid;

//         this.setState({ postId: id });
//         this.getPostByIdHandler(id);
        
//         //console.log("FULL POST PROPS: ", this.props);

//     }

//     getPostByIdHandler = (pid) => {
//         this.setState({ loading: true });
//         axios.get('blogs/'+pid+".json")
//             .then(res =>{
//                 this.setState({ post: res.data, loading: false });
//                 //console.log("FULL: ", res.data);
//             })
//             .catch(err => {
//                 this.setState({loading: false });
//                 console.log("ERROR: ", err); 
//             })
       
//     }

//     goBackHandler = () => {
//         this.props.history.goBack();
//     }

//     render() {
//         let post = null;
//         if(this.state.post){
//             post = (
//                 <Wrapper>
//                     <Header headerTitle={this.state.post.title} 
//                         backBtn={true} 
//                         goBack={this.goBackHandler.bind()}
//                         />
//                     <div className="PostContent">
//                         <p>{this.state.post.content}</p>
//                     </div>
//                 </Wrapper>    
//             );
//         }
//         return(
//             <div className="FullPost">
//                 {post}
//                 {this.state.loading ? 
//                     <Modal show={this.state.loading}>
//                         <Spinner status="Loading posts.."/>
//                     </Modal>
//                     : null
//                 }
//             </div>
//         );
//     }
// }

// export default FullPost;