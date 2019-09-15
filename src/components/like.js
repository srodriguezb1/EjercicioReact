import React, { Component } from 'react';

class Like extends Component {
    state ={
        likes:10,
        tags:["tag1","tag2","tag3"]
    }

    renderLikes(){;
        return(this.state.likes === 0 )? "Give us a like":this.state.likes + " likes";

    }

    handleLike = () =>{
       
        console.log(this)
        this.setState({likes: this.state.likes +1});
    }

    reset=() =>{
        this.setState({likes:0});
    } 

    render() {
        return (
            <div>
                <button onClick={this.handleLike}>Like</button> {this.renderLikes()} 
                <ul>
                    {this.state.tags.map(e=><li key={e}>{e}</li>)}
                </ul>
                <button onClick ={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Like;