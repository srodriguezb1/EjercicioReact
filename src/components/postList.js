import React, { Component } from 'react';
import Post from "./post";


class PostList extends Component {
    state={
        posts: [{
            title:"Hola",
            content:"Esto va muy rapido",
            author:"ayudaaa Sebastian",
            date:"hoy"
        },
        {
            title:"Hola2",
            content:"Esto va muy rapido HELP",
            author:"Pos yo quien mas",
            date:"ayer"
        }]
    }



    render() {
        return (
            <div>
                
                {this.state.posts.map(e=><Post value ={e}/>)}
                
            </div>
        );
    }
}

export default PostList;