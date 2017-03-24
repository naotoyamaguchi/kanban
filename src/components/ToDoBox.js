import React, { Component } from 'react';
import Card from './Card';

export default class ToDoBox extends Component{
  constructor(props){
    super(props);

    this.props = props;
    console.log(this.props.id);

    this.submit = this.submit.bind(this);
    this.done = this.done.bind(this);
  }

  submit(e){
    e.preventDefault();

    this.props.deleteCard(this.props)
  }

  done(e){
    e.preventDefault();
    this.props.done(this.props);
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
        <form onSubmit={this.done}>
            <input type="submit" value="===>>>"/>
        </form>
        
      </div>
    )
  }
}

// const ToDoBox = (props) => (
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

// export default ToDoBox;





// export default class ToDoBox extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       cards: []
//     }
//   }

//   getCards(){
//     return new Promise(function(resolve, reject){
//       function reqListener(){
//         resolve(this.responseText)
//         console.log(this.responseText)
//       }

//       let oReq = new XMLHttpRequest();
//       oReq.addEventListener("load", reqListener)
//       oReq.open("GET", "api/card/getTodo")
//       oReq.setRequestHeader("Content-Type", "application/json")
//       oReq.send();
//     });
//   }

//   componentWillMount(){
//     this.getCards()
//     .then((data)=>{
//       console.log(JSON.parse(data));
//     this.setState({ cards: JSON.parse(data) })
//     })
//     .catch(function(e){
//       console.log(e);
//     })
//   }


//   render(){
//     return (
//       <div className="ToDoBox">
//         <h1>TO DO</h1>
//             <Card
//               key={id}
//               id={id}
//               title={title}
//               assignedTo={assignedTo}
//               status={status}
//               createdAt={createdAt}
//               createdBy={createdBy}
//               priority={priority}
//               updatedAt={updatedAt}
//             />)
//       </div>
//     )
//   }
// }