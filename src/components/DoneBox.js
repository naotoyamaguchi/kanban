import React, { Component } from 'react';
import Card from './Card';

export default class DoneBox extends Component{
  constructor(props){
    super(props);

    this.props = props;
    console.log(this.props.id);

    this.submit = this.submit.bind(this);
    this.back = this.back.bind(this);
  }

  submit(e){
    e.preventDefault();

    this.props.deleteCard(this.props)
  }

  back(e){
    e.preventDefault();
    this.props.back(this.props);
  }


  render(){
    return (
      <div className="Card-Box">
        <p>Title : {this.props.title}</p>
        <p>ID : {this.props.id}</p>
        <p>title: {this.props.title}</p>
        <p>assigned to: {this.props.assignedTo}</p>
        <p>status: {this.props.status}</p>
        <p>created at: {this.props.createdAt}</p>
        <p>created by: {this.props.createdBy}</p>
        <p>priority: {this.props.priority}</p>
        <p>updated at: {this.props.updatedAt}</p>
        <form onSubmit={this.submit}>
            <input type="submit" value={this.props.id}/>
        </form>
        <form onSubmit ={this.back}>
            <input type="submit" value="<<<==="/>
        </form>
      </div>
    )
  }
}