import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state={
        loadedpost:null
    }
componentDidMount(){
    if(this.props.match.params.id){
            if( !this.state.loadedpost || (this.state.loadedpost && this.state.loadedpost.id !==this.props.id)){
             axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
                .then(response=>{
                return this.setState({loadedpost:response.data}) 
                
                // console.log(response)
            });
        }
        
    }
}
deletehandler=()=>{
    axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
    .then(response=>{
        console.log(response)
    });
}

    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign:'center'}}>Loading</p>;
        }
        if(this.state.loadedpost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedpost.title}</h1>
                    <p>{this.state.loadedpost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletehandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;