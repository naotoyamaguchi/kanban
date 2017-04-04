import React, {Component, PropTypes} from 'react'
import Card from './Card';
import { addCard } from '../actions'
import { connect } from 'react-redux';
import { ItemTypes } from '../constants/constants'
import { DropTarget } from 'react-dnd';
import { moveCard } from '../constants/kanbanDragActions'
import { moveCardRight, moveCardLeft, nextCard, backCard, deleteCard } from '../actions'

const cardTarget = {
  drop(props, monitor, component){
    let card = monitor.getItem().props
    // console.log("component", component);
    console.log("card", card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
    console.log("component", component)
    console.log("props", monitor)
    console.log("......", component.store.dispatch)
    component.store.dispatch(moveCardRight(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt))
    component.store.dispatch(nextCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt))
  }
}

function collect(connect, monitor){
  return{
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class InProgressBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: []
    }
  }

  // static dropCard(){
  //   return {
  //   drop(props, monitor, component){
  //   let card = monitor.getItem().props
  //   // console.log("component", component);
  //   console.log("card", card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
  //   console.log("component", component.store)
  //   console.log("this.props", this.props)
  //   console.log("props",props)
  //   this.props.onMoveCardRight(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt);
  //   this.props.onNextCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt);
  //     }
  //   }

  // }

  getCards(){
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(this.responseText)
      }

      let oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener)
      oReq.open("GET", "api/card/getInProgress")
      oReq.setRequestHeader("Content-Type", "application/json")
      oReq.send();
    });
  }

  componentWillMount(){
    console.log("test", this.getCards)
    this.getCards()
    .then((data)=>{
      JSON.parse(data).forEach( card => {
        this.props.onAddCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
      })
    })
    .catch(function(e){
      console.log(e);
    })
  }

  render(){
    const { x , connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div className="InProgressBox" style={{
        position: 'relative'
      }}>
        <h1>IN PROGRESS</h1>
          {
            this.props.inProgressCards.map(({ id, title, assignedTo, status, createdAt, createdBy, priority, updatedAt}) => 
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
    inProgressCards: state.inProgressCards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoveCardRight: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(moveCardRight(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    },
    onNextCard: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(nextCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    },
    onAddCard: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(addCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    }
  }
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(InProgressBox);

InProgressBox.propTypes = {
  isOver: PropTypes.bool.isRequired
}

const targetInProgressBox = connect(mapStateToProps, mapDispatchToProps)(InProgressBox);

export default DropTarget(ItemTypes.CARD, cardTarget, collect)(targetInProgressBox);