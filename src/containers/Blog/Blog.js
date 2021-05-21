import React, { Component } from 'react';
import {Route,NavLink,Switch} from 'react-router-dom';

import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';

import './Blog.css';



class Blog extends Component {
    
       
    
    



    render () {
        
           return(

            <div>
                <div className='Blog'>
                    <header>
                        <nav>
                         <ul>
                            <li><NavLink  to='/post/' exact activeStyle={{color:'red'}}>Home</NavLink></li>
                            <li><NavLink to="/add-new" activeClassName='active' activeStyle={{color:'red'}}>Add new Post</NavLink></li>
                         </ul>
                        </nav>
                    </header>
                    
                    
                </div>
                <Switch>
               
               <Route path='/add-new' component={NewPost} />
               <Route path='/post/'  component={Posts} />
               </Switch>
            </div>
        );
    }
}

export default Blog;