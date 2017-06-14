import React, { Component } from 'react';
import ToDoBox from '../../components/ToDoBox';
import InProgressBox from '../../components/InProgressBox';
import DoneBox from '../../components/DoneBox';
import CardForm from '../../components/form';
import './app.css';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

export const ItemTypes = {
  CARD: 'card'
};

class App extends Component {

  // constructor(){
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <div className="Header">Kanban</div>
        <div className="App-header">
          <CardForm/>
        </div>
        <div className="Kanban-Box">
          <p className="App-intro">
            To get started, fill out all the entries above and submit your task!
          </p>
          <ToDoBox/>
          <InProgressBox/>
          <DoneBox/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
