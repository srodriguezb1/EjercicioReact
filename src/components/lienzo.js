import React, { Component } from 'react';
import Tarea from "./tarea";

class Lienzo extends Component {
    state={
        value:'',
        value2:'',
        title: this.props.value.title,
        tareas:[]
    }
    
    eliminarTarea = (title) =>{
        this.setState(state => {
            const list = state.tareas.filter(item => item.title !== title);

            return{
               list,
            };
        });
    };

    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };
    onChangeValue2 = event => {
        this.setState({ value: event.target.value2 });
    };

    agregarTarea = () =>{
        this.setState(state =>{
            const list = [...state.tareas,{title:state.value,desc:state.value2}];

            return {
                list,
                value:'',
                value2:'',
            };
        });
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                    <div className="card-columns">
                        {this.state.tareas.map(e=><Tarea value ={e}/>)}
                    </div>
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Agregar Tarea
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1"   role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Agregar Tarea</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div className="modal-body">
                            <form >
                            <div className="form-group">
                                <label > Titulo</label>
                                <input type="text" className="form-control" id="titulo" placeholder="Titulo" value={this.state.value} onChange={this.onChangeValue}></input>
                            </div>
                            </form>
                            <form >
                            <div className="form-group">
                                <label htmlFor="descr"> Descripcion</label>
                                <input type="text" className="form-control" id="descr" placeholder="Aquí va la descripción de la tarea" value={this.state.value2} onChange={this.onChangeValue2}></input>
                            </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick= {this.agregarTarea}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Lienzo;