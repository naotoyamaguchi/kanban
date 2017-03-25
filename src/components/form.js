import React, {Component} from 'react'
import { connect } from 'react-redux';
import addCard from '../actions'

export class CardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      priority: '',
      status: '',
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
      this.props.onAddCard(card.title, card.author, card.priority, card.status, card.createdBy, card.assignedTo)
    })


    this.setState({
      title: '',
      priority: '',
      status: '',
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
        resolve(card)
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
          <input type="text" placeholder="status" value={this.state.status} onChange={this.statusVal} />          
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
    onAddCard: (title, author, priority, status, createdBy, assignedTo) => {
      dispatch(addCard(title, author, priority, status, createdBy, assignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);