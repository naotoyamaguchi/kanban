import React, { Component } from 'react';
import KanbanTitle from '../../components/KanbanTitle';
// import Card from '../../components/Card';
import ToDoBox from '../../components/ToDoBox';
import InProgressBox from '../../components/InProgressBox';
import DoneBox from '../../components/DoneBox';
import CardForm from '../../components/form';
import './app.css';

class App extends Component {

  constructor(){
    super();
    this.pageTitle = "Welcome to Kanban!"
    this.state = {
      todoCards: [],
      inProgressCards: [],
      doneCards: []
    }

    //this.xx = this.xx.bind(this);
    // this.reqListener = this.reqListener.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteUpdate = this.deleteUpdate.bind(this);
  }

  getTodoCards(){
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(this.responseText)
        console.log(this.responseText)
      }

      let oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener)
      oReq.open("GET", "api/card/getTodo")
      oReq.setRequestHeader("Content-Type", "application/json")
      oReq.send();
    });
  }

  getInProgressCards(){
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(this.responseText)
        console.log(this.responseText)
      }

      let oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener)
      oReq.open("GET", "api/card/getInProgress")
      oReq.setRequestHeader("Content-Type", "application/json")
      oReq.send();
    });
  }

  getDoneCards(){
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(this.responseText)
        console.log(this.responseText)
      }

      let oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener)
      oReq.open("GET", "api/card/getDone")
      oReq.setRequestHeader("Content-Type", "application/json")
      oReq.send();
    });
  }

  addCard(card){
    this.postCard(card)
    .then((status) => {
      console.log(status)
      if(status === "OK"){
       console.log("au good") 
      }
      if(card.status === "todo"){        
        this.getTodoCards()
        .then((data) => {
          console.log(data)
          this.setState({ todoCards:JSON.parse(data) })
        })
      }
      if(card.status === "inprogress"){
        this.getInProgressCards()
        .then((data) => {
          console.log(data)
          this.setState({ inProgressCards:JSON.parse(data) })
        })
      }
      if(card.status === "done"){
        this.getDoneCards()
        .then((data) => {
          console.log(data)
          this.setState({ doneCards:JSON.parse(data) })
        })
      }
    })
  }

  postCard(card){
    return new Promise(function(resolve, reject){
      console.log("postCard", card);

      let oReq = new XMLHttpRequest();
      oReq.open("POST", "api/card/post", true);
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      oReq.send(`title=${card.title}&priority=${card.priority}&status=${card.status}&createdBy=${card.createdBy}&assignedTo=${card.assignedTo}`);
      resolve("OK")
    })
  }

  componentWillMount() {
    this.getTodoCards()
    .then((data) => {
      this.setState({todoCards:JSON.parse(data)})
    })
    this.getInProgressCards()
    .then((data) => {
      this.setState({inProgressCards:JSON.parse(data)})
    })
    this.getDoneCards()
    .then((data) => {
      this.setState({doneCards:JSON.parse(data)})
    })
    .catch(function(e){
      console.log(e)
    })
  }

  deleteCard(key){
    return new Promise(function(resolve, reject){
      let oReq = new XMLHttpRequest();
      oReq.open("DELETE", `api/card/${key.id}`, true);
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      oReq.send(key);
      resolve("OK")
      console.log(key.id)
    })
  }

  deleteUpdate(key){
    console.log(key)
    this.deleteCard(key)
    .then((status) => {
      console.log(status)
      if(key.status === "todo"){        
        this.getTodoCards()
        .then((data) => {
          console.log(data)
          this.setState({ todoCards:JSON.parse(data) })
        })
      }
      if(key.status === "inprogress"){
        this.getInProgressCards()
        .then((data) => {
          console.log(data)
          this.setState({ inProgressCards:JSON.parse(data) })
        })
      }
      if(key.status === "done"){
        this.getDoneCards()
        .then((data) => {
          console.log(data)
          this.setState({ doneCards:JSON.parse(data) })
        })
      }
    })

  }

  done(key){
    console.log("Hello there")
    return new Promise(function(resolve, reject){
      let oReq = new XMLHttpRequest();
      oReq.open("PUT", `api/card/status-update-next/${key.id}`, true);
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      oReq.send("hello")
      resolve("OK")
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <KanbanTitle
          title={ this.pageTitle }
          />
          <CardForm
          addCard={ this.addCard }
          />
        </div>
        <div className="Kanban-Box">
          <p className="App-intro">
            To get started, HELLO WORLD <code>src/App.js</code> and save to reload.
          </p>
          <div className="ToDoBox">
            <h1>To Do</h1>
            {
              this.state.todoCards.map(({key, id, title, assignedTo, status, createdAt, createdBy, priority, updatedAt}) =>
                <ToDoBox
                  title={title}
                  id={id}
                  assignedTo={assignedTo}
                  status={status}
                  createdAt={createdAt}
                  createdBy={createdBy}
                  priority={priority}
                  updatedAt={updatedAt}
                  deleteCard={this.deleteUpdate}
                  done={this.done}
                />
                )
            }
          </div>
          <div className="InProgressBox">
            <h1>In Progress</h1>
            {
              this.state.inProgressCards.map(({key, id, title, assignedTo, status, createdAt, createdBy, priority, updatedAt}) =>
                <InProgressBox
                  title={title}
                  id={id}
                  assignedTo={assignedTo}
                  status={status}
                  createdAt={createdAt}
                  createdBy={createdBy}
                  priority={priority}
                  updatedAt={updatedAt}
                  deleteCard={this.deleteUpdate}
                />
                )
            }
          </div>
          <div className="DoneBox">
            <h1>Done</h1>
            {
              this.state.doneCards.map(({key, id, title, assignedTo, status, createdAt, createdBy, priority, updatedAt}) =>
                <DoneBox
                  title={title}
                  id={id}
                  assignedTo={assignedTo}
                  status={status}
                  createdAt={createdAt}
                  createdBy={createdBy}
                  priority={priority}
                  updatedAt={updatedAt}
                  deleteCard={this.deleteUpdate}
                />
                )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
