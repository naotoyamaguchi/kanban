import React, {Component} from 'react'
import Card from './Card';
import { addCard } from '../actions'
import { connect } from 'react-redux';

class InProgressBox extends Component {
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
      oReq.open("GET", "api/card/getInProgress")
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
      console.log(e);
    })
  }

  render(){
    return (
      <div className="InProgressBox">
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
    onAddCard: (id, title, author, priority, status, createdBy, assignedTo) => {
      // console.log("addCard ", addCard(title,author,priority,status,createdBy,assignedTo))
      dispatch(addCard(id, title, author, priority, status, createdBy, assignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InProgressBox);