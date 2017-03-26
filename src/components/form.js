import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addCard } from '../actions'

export class CardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      priority: '',
      status: 'todo',
      createdBy: '',
      assignedTo: '',
    };

    this.submit = this.submit.bind(this);
    this.titleVal = this.titleVal.bind(this);
    this.priorityVal = this.priorityVal.bind(this);
    this.statusVal = this.statusVal.bind(this);
    this.createdByVal = this.createdByVal.bind(this);
    this.assignedToVal = this.assignedToVal.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  submit(e){
    e.preventDefault();

    this.addCard( {
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo

    })
    .then((card) => {
      this.props.onAddCard(card.id, card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo, card.createdAt, card.updatedAt)
    })


    this.setState({
      title: '',
      priority: '',
      // status: '',
      createdBy: '',
      assignedTo: '',
    });
  }

  titleVal(e){
    this.setState({
      title: e.target.value
    });
  }

  priorityVal(e){
    this.setState({
      priority: e.target.value
    });
  }

  statusVal(e){
    this.setState({
      status: e.target.value
    });
  }

  createdByVal(e){
    this.setState({
      createdBy: e.target.value
    });
  }

  assignedToVal(e){
    this.setState({
      assignedTo: e.target.value
    });
  }

  addCard(card){
    return new Promise(function(resolve, reject){
      function reqListener(){
        let results = JSON.parse(this.responseText);
        resolve(results)
      }

      let oReq = new XMLHttpRequest();
      oReq.open("POST", "api/card/post", true);
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      oReq.send(`title=${card.title}&priority=${card.priority}&status=${card.status}&createdBy=${card.createdBy}&assignedTo=${card.assignedTo}`);
      oReq.addEventListener("load", reqListener)
    })
  }


  //

  render(){
    return (
      <form onSubmit={this.submit}>
        <div>
          <input type="text" placeholder="title" value={this.state.title} onChange={this.titleVal} />
        </div>          
        <div>
          <input type="text" placeholder="priority" value={this.state.priority} onChange={this.priorityVal} />
        </div>
          
        <div>
          <select onChange={this.statusVal}>
            <option value="todo">to do</option>
            <option value="inprogress">in progress</option>
            <option value="done">done</option>
          </select>    
        </div>
        <div>
          <input type="text" placeholder="createdBy" value={this.state.createdBy} onChange={this.createdByVal} />
        </div>
        <div>
          <input type="text" placeholder="assignedTo" value={this.state.assignedTo} onChange={this.assignedToVal} />
        </div>
        <div>
          <input type="submit" value="Submit Card"/>
        </div>
      </form>
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
    onAddCard: (id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt) => {
      dispatch(addCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);