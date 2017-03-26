import React, {Component} from 'react'
import { updateCard, deleteCard, deupdatedCard, deleteCard2 } from '../actions'
import { connect } from 'react-redux'

class Card extends Component {
  constructor(props){
    super(props);

    this.nextCard = this.nextCard.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  //function(){

  // }
  next(e){
    e.preventDefault()
    this.nextCard(this.props)
    .then((card) => {
      this.props.onAddCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo)
      this.props.onUpdateCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo)
    })


  }

  nextCard(card){
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(card)
      }

      let oReq = new XMLHttpRequest();
      oReq.open("PUT", `api/card/status-next/${card.id}`, true);
      oReq.addEventListener("load", reqListener)
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      oReq.send(`id=${card.id}&title=${card.title}&priority=${card.priority}&status=${card.status}&createdBy=${card.createdBy}&assignedTo=${card.assignedTo}`)
    })
  }

  back(e){
    e.preventDefault()
    this.backCard(this.props)
    .then((card) => {
      this.props.onBackCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo)
      this.props.onUpdateCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo)
    })
  }


  backCard(card){
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(card)
      }

      let oReq = new XMLHttpRequest();
      oReq.open("PUT", `api/card/status-back/${card.id}`, true);
      oReq.addEventListener("load", reqListener)
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      oReq.send(`id=${card.id}&title=${card.title}&priority=${card.priority}&status=${card.status}&createdBy=${card.createdBy}&assignedTo=${card.assignedTo}`)
    })
  }

  render(){
      if(this.props.status === "todo"){
      return(
      <div className="Card-Box">
        <ul>
          <li>
            <p> key/id = { this.props.id } </p>
            <p> title = { this.props.title } </p>
            <p> assingnedTo = { this.props.assignedTo } </p>
            <p> status = {this.props.status } </p>
            <p> createdAt = { this.props.createdAt } </p>
            <p> createdBy = { this.props.createdBy } </p>
            <p> priority = { this.props.priority } </p>
            <p> updatedAt = { this.props.updatedAt } </p>
            <form onSubmit={ this.next }>
              <input type="submit" value="=>" />
            </form>
          </li>
        </ul>
      </div>
      )
      }

      if(this.props.status === "inprogress"){
      return(
      <div className="Card-Box">
        <ul>
          <li>
            <p> key/id = { this.props.id } </p>
            <p> title = { this.props.title } </p>
            <p> assingnedTo = { this.props.assignedTo } </p>
            <p> status = {this.props.status } </p>
            <p> createdAt = { this.props.createdAt } </p>
            <p> createdBy = { this.props.createdBy } </p>
            <p> priority = { this.props.priority } </p>
            <p> updatedAt = { this.props.updatedAt } </p>
            <form onSubmit={ this.next }>
              <input type="submit" value="=>" />
            </form>
            <form onSubmit = { this.back }>
              <input type="submit" value="<=" />
            </form>
          </li>
        </ul>
      </div>
      )
      }

      if(this.props.status === "done"){
      return(
      <div className="Card-Box">
        <ul>
          <li>
            <p> key/id = { this.props.id } </p>
            <p> title = { this.props.title } </p>
            <p> assingnedTo = { this.props.assignedTo } </p>
            <p> status = {this.props.status } </p>
            <p> createdAt = { this.props.createdAt } </p>
            <p> createdBy = { this.props.createdBy } </p>
            <p> priority = { this.props.priority } </p>
            <p> updatedAt = { this.props.updatedAt } </p>
            <form onSubmit={ this.back }>
              <input type="submit" value="<=" />
            </form>
          </li>
        </ul>
      </div>
        )
      }
    }
  }



const mapStateToProps = (state) => {
  return {
    toDoCards: state.toDoCards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBackCard: (id, title, author, priority, status, createdBy, assignedTo) => {
      dispatch(deleteCard2(id, title, author, priority, status, createdBy, assignedTo));
    },
    onAddCard: (id, title, author, priority, status, createdBy, assignedTo) => {
      dispatch(updateCard(id, title, author, priority, status, createdBy, assignedTo));
    },
    onUpdateCard: (id, title, author, priority, status, createdBy, assignedTo) => {
      dispatch(deleteCard(id, title, author, priority, status, createdBy, assignedTo));
    },


  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);