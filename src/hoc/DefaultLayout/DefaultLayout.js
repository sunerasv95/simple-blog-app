import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Blog from '../../containers/Blog/Blog';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Wrapper from '../Wrapper/Wrapper';
import NewPost from '../../containers/NewPost/NewPost';

import './DefaultLayout.css';


const DefaultLayout = (props) => {
    return (
        <Wrapper>
            <Navbar />
            <div className="Content">
                <Switch>
                    <Route path="/" exact>
                        <Blog />
                    </Route>
                    <Route path="/new-post">
                        <NewPost />
                    </Route>
                </Switch>
            </div>
        </Wrapper>
    );
}

export default DefaultLayout;