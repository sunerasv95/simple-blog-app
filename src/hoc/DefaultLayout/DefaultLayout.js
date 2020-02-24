import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Blog from '../../containers/Blog/Blog';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Wrapper from '../Wrapper/Wrapper';
import NewPost from '../../containers/NewPost/NewPost';
import FullPost from '../../components/FullPost/FullPost';

import './DefaultLayout.css';


const DefaultLayout = (props) => {
    //console.log("LAY:", typeof(Blog));
    return (
        <Wrapper>
            <Navbar />
            <div className="Content">
                <Switch>
                    <Route path="/" exact component={Blog} />
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/view/:pid" component={FullPost}/>
                    <Route path="/:id" component={Blog}/>
                </Switch>
                
            </div>
        </Wrapper>
    );
}

export default DefaultLayout;