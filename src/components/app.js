import React, { Component } from 'react';
import Lienzo from "./lienzo";


class App extends Component {
    state={
        categorias:[{
            title:"To Do"
        },{
            title:"Doing"
        },{
            title:"Done"
        }]
    }
    render() {
        return (
            <div>
                <row>
                    <h1>
                        My Kanban App
                    </h1>
                </row>
                
                
                    <div className ="col-12">
                <div>
                        <Lienzo value = {this.state.categorias[0]}/>
                </div>
                <div >
                    <Lienzo value = {this.state.categorias[1]}/>
                </div>
                <div>
                    <Lienzo value = {this.state.categorias[2]}/>
                </div>
                </div>
                
            </div>
        );
    }
}

export default App;