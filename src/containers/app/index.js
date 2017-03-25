import React, { Component } from 'react';
import KanbanTitle from '../../components/KanbanTitle';
import Card from '../../components/Card';
import ToDoBox from '../../components/ToDoBox';
import InProgressBox from '../../components/InProgressBox';
import DoneBox from '../../components/DoneBox';
import CardForm from '../../components/form';
import './app.css';

import addCard from '../../actions'
import { connect } from 'react-redux';

class App extends Component {

  constructor(){
    super();
    this.pageTitle = "Welcome to Kanban!"
    this.state = {
    }

    //this.xx = this.xx.bind(this);
    // this.reqListener = this.reqListener.bind(this);
  }

  // addCard(card){
  //   return new Promise(function(resolve, reject){
  //     console.log(card);
  //     function reqListener(){
  //       resolve(this.responseText)
  //       console.log(this.responseText)
  //     }

  //     let oReq = new XMLHttpRequest();
  //     oReq.open("POST", "api/card/post", true);
  //     oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  //     oReq.send(`title=${card.title}&priority=${card.priority}&status=${card.status}&createdBy=${card.createdBy}&assignedTo=${card.assignedTo}`);
  //   })
  // }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <KanbanTitle
          title={ this.pageTitle }
          />
          <CardForm/>
        </div>
        <div className="Kanban-Box">
          <p className="App-intro">
            To get started, HELLO WORLD <code>src/App.js</code> and save to reload.
          </p>
          <ToDoBox/>
          <InProgressBox/>
          <DoneBox/>
        </div>
      </div>
    );
  }
}

export default App;
