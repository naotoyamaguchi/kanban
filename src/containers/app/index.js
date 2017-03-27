import React, { Component } from 'react';
import KanbanTitle from '../../components/KanbanTitle';
import ToDoBox from '../../components/ToDoBox';
import InProgressBox from '../../components/InProgressBox';
import DoneBox from '../../components/DoneBox';
import CardForm from '../../components/form';
import './app.css';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class App extends Component {

  constructor(){
    super();
    this.pageTitle = "Welcome to Kanban!"
  }

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

export default DragDropContext(HTML5Backend)(App);
