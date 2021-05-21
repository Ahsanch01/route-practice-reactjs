import React,{ Component } from "react";
import {Link,Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost'
import axios from 'axios';
import './Posts.css'
import Post from '../../../components/Post/Post';
class Posts extends Component{
    state ={
        posts:[]
    }
    componentDidMount(){
            console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts=response.data.slice(0,4);
            const updatedposts=posts.map(post=>{  return{
                ...post,
                author :'ahsan'
            }
            });
            this.setState({posts:updatedposts})
         //    console.log();
 
        })
     }
 
    postClickedhandler=(id)=>{
        this.setState({selectpostid:id})
    
    }
    render(){ 
        const posts=this.state.posts.map(post=>{
            return (<Link to={'/post/'+ post.id} key ={post.id}>
            <Post 
            title={post.title}
            author={post.author}
            
            clicked={()=>this.postClickedhandler(post.id)} />
            </Link>)
        });
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
               
                <Route path='/post/:id' exact component={FullPost} />
            </div>
            
        );
        }
}
export default Posts;