import React, { Component } from 'react';

class Post extends Component {
    state={
        title:this.props.value.title,
        content:this.props.value.content,
        author:this.props.value.author,
        date:this.props.value.date
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <p>
                    {this.state.content}
                </p>
                <p>
                    {this.state.author}  
                </p>
                <h4>
                    {this.state.date}
                </h4>
            </div>
        );
    }
}

export default Post;