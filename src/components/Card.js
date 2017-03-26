import React, {Component} from 'react'
import { moveCardRight, moveCardLeft, nextCard, backCard, deleteCard } from '../actions'
import { connect } from 'react-redux'

class Card extends Component {
  constructor(props){
    super(props);

    this.nextCard = this.nextCard.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.delete = this.delete.bind(this);
  }

  //function(){

  // }
  next(e){
    e.preventDefault()
    this.nextCard(this.props)
    .then((card) => {
      this.props.onMoveCardRight(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
      this.props.onNextCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
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
      this.props.onBackCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
      this.props.onMoveCardLeft(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
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

  delete(e){
    e.preventDefault()
    this.deleteCard(this.props)
    .then((card) => {
      this.props.onDelete(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
    })
  }

  deleteCard(card){
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(card)
      }

      let oReq = new XMLHttpRequest();
      oReq.open("DELETE", `api/card/${card.id}`, true);
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
            <p> assignedTo = { this.props.assignedTo } </p>
            <p> status = {this.props.status } </p>
            <p> createdAt = { this.props.createdAt } </p>
            <p> createdBy = { this.props.createdBy } </p>
            <p> priority = { this.props.priority } </p>
            <p> updatedAt = { this.props.updatedAt } </p>
            <form onSubmit={ this.next }>
              <input type="submit" value="=>" />
            </form>
            <form onSubmit={ this.delete }>
              <input type="submit" value="DELETE"/>
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
            <p> assignedTo = { this.props.assignedTo } </p>
            <p> status = {this.props.status } </p>
            <p> createdAt = { this.props.createdAt } </p>
            <p> createdBy = { this.props.createdBy } </p>
            <p> priority = { this.props.priority } </p>
            <p> updatedAt = { this.props.updatedAt } </p>
            <form onSubmit={ this.next }>
              <input type="submit" value="=>" />
            </form>
            <form onSubmit={ this.back }>
              <input type="submit" value="<=" />
            </form>
            <form onSubmit={ this.delete }>
              <input type="submit" value="DELETE"/>
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
            <p> assignedTo = { this.props.assignedTo } </p>
            <p> status = {this.props.status } </p>
            <p> createdAt = { this.props.createdAt } </p>
            <p> createdBy = { this.props.createdBy } </p>
            <p> priority = { this.props.priority } </p>
            <p> updatedAt = { this.props.updatedAt } </p>
            <form onSubmit={ this.back }>
              <input type="submit" value="<=" />
            </form>
            <form onSubmit={ this.delete }>
              <input type="submit" value="DELETE"/>
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
    onBackCard: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(backCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    },
    onDelete: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(deleteCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    },
    onMoveCardRight: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(moveCardRight(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    },
    onMoveCardLeft: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(moveCardLeft(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    },
    onNextCard: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(nextCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    },


  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);