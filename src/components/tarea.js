import React, { Component } from 'react';

class Tarea extends Component {

    constructor(props){
        super(props);
    };

    state={
        title: this.props.value.title,
        desc: this.props.value.desc
    }

    finish = ()=>{
        this.props.eliminarTarea();
    }

    render() {
        return (
            <div className="card">
                <h5 className="card-header">{this.state.title}</h5>
                <div className="card-body">
                    <p className="card-text">{this.state.desc}</p>
                    <button className="btn btn-primary" onClick={this.finish}>Terminar</button>
                </div>
            </div>
        );
    }
}

export default Tarea;