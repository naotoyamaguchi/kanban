import React, {Component, PropTypes} from 'react'
import Card from './Card';
import { addCard }  from '../actions'
import { connect } from 'react-redux';
import { ItemTypes } from '../constants/constants'
import { DropTarget } from 'react-dnd';
import { removeFromPastState, addToNewState } from '../actions'

const cardTarget = {
  drop(props, monitor, component){
    let card = monitor.getItem().props

    component.store.dispatch(addToNewState(card.id, card.title, card.author, card.priority, "done", card.createdBy, card.assignedTo, card.createdAt, card.updatedAt, card))
    component.store.dispatch(removeFromPastState(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt))
  }
}

function collect(connect, monitor){
  return{
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class DoneBox extends Component {
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
      oReq.open("GET", "api/card/getDone")
      oReq.setRequestHeader("Content-Type", "application/json")
      oReq.send();
    });
  }

  componentWillMount(){
    this.getCards()
    .then((data)=>{
      JSON.parse(data).forEach( card => {
        this.props.onAddCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
      })
    })
    .catch(function(e){
    })
  }

  render(){
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div className="DoneBox" style={{
        position: 'relative'
      }}>
        <h1 className="boxTitle">DONE</h1>
          {
            this.props.doneCards.map(({ id, title, assignedTo, status, createdAt, createdBy, priority, updatedAt}) => 
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
          {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    doneCards: state.doneCards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(addCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    }
  }
};

DoneBox.propTypes = {
  isOver: PropTypes.bool.isRequired
}

const targetDoneBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoneBox);

export default DropTarget(ItemTypes.CARD, cardTarget, collect)(targetDoneBox);