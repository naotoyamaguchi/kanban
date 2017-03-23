import React, { Component } from 'react';
import Card from './Card';

export default class InProgressBox extends Component{
  constructor(props){
    super(props);

    this.props = props;
    console.log(this.props.id);

    this.submit = this.submit.bind(this);
  }

  submit(e){
    e.preventDefault();

    this.props.deleteCard(this.props)
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
      </div>
    )
  }
}

// const InProgressBox = (props) => (
//   <div className="Card-Box">
//     <p>Title : {props.title}</p>
//     <p>ID : {props.id}</p>
//     <p>title: {props.title}</p>
//     <p>assigned to: {props.assignedTo}</p>
//     <p>status: {props.status}</p>
//     <p>created at: {props.createdAt}</p>
//     <p>created by: {props.createdBy}</p>
//     <p>priority: {props.priority}</p>
//     <p>updated at: {props.updatedAt}</p>
//     <form>
//       <div>
//         <input type="submit" value={props.id}/>
//       </div>
//     </form>
//   </div>
// )

// export default InProgressBox;