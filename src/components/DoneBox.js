import React, {Component} from 'react'
import Card from './Card';

export default class DoneBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: []
    }
  }

  getCards(){
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

  componentWillMount(){
    this.getCards()
    .then((data)=>{
      console.log(JSON.parse(data));
    this.setState({ cards: JSON.parse(data) })
    })
    .catch(function(e){
      console.log(e);
    })
  }

  render(){
    return (
      <div className="DoneBox">
        <h1>DONE</h1>
          {
            this.state.cards.map(({ id, title, assignedTo, status, createdAt, createdBy, priority, updatedAt}) => 
              <Card
                key={id}
                id={id}
                title={title}
                assignedTo={assignedTo}
                status={status}
                createdAt={createdAt}
                createdBy={createdBy}
                priority={priority}
                updatedAt={updatedAt}
              />)
          }
      </div>
    )
  }
}