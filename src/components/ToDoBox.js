import React, {Component} from 'react'
import Card from './Card';
import { addCard }  from '../actions'
import { connect } from 'react-redux';

class ToDoBox extends Component {
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
      }

      let oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener)
      oReq.open("GET", "api/card/getTodo")
      oReq.setRequestHeader("Content-Type", "application/json")
      oReq.send();
    });
  }

  componentWillMount(){
    this.getCards()
    .then((data)=>{
      JSON.parse(data).forEach( card => {
        this.props.onAddCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo)
      })
    })
    .catch(function(e){
    })
  }

  render(){
    return (
      <div className="ToDoBox">
        <h1>TO DO</h1>
          {
            this.props.toDoCards.map(({ id, title, assignedTo, status, createdAt, createdBy, priority, updatedAt}) => 
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

const mapStateToProps = (state) => {
  return {
    toDoCards: state.toDoCards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (id, title, author, priority, status, createdBy, assignedTo) => {
      dispatch(addCard(id, title, author, priority, status, createdBy, assignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoBox);