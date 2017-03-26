// import { ADD_TODOCARD, ADD_INPROGRESSCARD } from '../actions';
// import { combineReducers } from 'redux';

const initialState = {
  toDoCards: [],
  inProgressCards: [],
  doneCards: []
}

export function toDoCards(state = initialState, action) {
  console.log("top of reducers... action is..." , action.status, "type is .... ", action.type);
  switch(action.type) {
    case "todo":
      return Object.assign({}, state, {
        toDoCards: [
        ...state.toDoCards,
          {
            id: action.id,
            title: action.title,
            status: action.status,
            createdBy: action.createdBy,
            assignedTo: action.assignedTo,
            priority: action.priority
          }
        ]
      })
    break;

    case "inprogress":
      return Object.assign({}, state, {
        inProgressCards: [
          ...state.inProgressCards,
          {
            id: action.id,
            title: action.title,
            status: action.status,
            createdBy: action.createdBy,
            assignedTo: action.assignedTo,
            priority: action.priority
          }
        ]
      })
    break;

    case "done":
      return Object.assign({}, state, {
        doneCards: [
          ...state.doneCards,
          {
            id: action.id,
            title: action.title,
            status: action.status,
            createdBy: action.createdBy,
            assignedTo: action.assignedTo,
            priority: action.priority
          }
        ]
      })
    break;

    case "MOVE_CARD_RIGHT":

    if(action.status === "todo"){
      return Object.assign({}, state, {      
        inProgressCards: [
          ...state.inProgressCards,
          {
            id: action.id,
            title: action.title,
            status: "inprogress",
            createdBy: action.createdBy,
            assignedTo: action.assignedTo,
            priority: action.priority
          }
        ]
      })
    }

    if(action.status === "inprogress"){
      return Object.assign({}, state, {    
        doneCards: [
          ...state.doneCards,
          {
            id: action.id,
            title: action.title,
            status: "done",
            createdBy: action.createdBy,
            assignedTo: action.assignedTo,
            priority: action.priority
          }
        ]
      })
    }

    break;

    case "MOVE_CARD_LEFT":

    if(action.status === "done"){
      return Object.assign({}, state, {      
        inProgressCards: [
          ...state.inProgressCards,
          {
            id: action.id,
            title: action.title,
            status: "inprogress",
            createdBy: action.createdBy,
            assignedTo: action.assignedTo,
            priority: action.priority
          }
        ]
      })
    }

    if(action.status === "inprogress"){
      return Object.assign({}, state, {    
        toDoCards: [
          ...state.toDoCards,
          {
            id: action.id,
            title: action.title,
            status: "todo",
            createdBy: action.createdBy,
            assignedTo: action.assignedTo,
            priority: action.priority
          }
        ]
      })
    }

    break;

    case "NEXT_CARD":
    if(action.status === "todo"){
    let updatedCards = state.toDoCards.filter( card => {
      return card.id !== action.id 
      })
      return Object.assign({}, state, {
        toDoCards: [
          ...updatedCards
        ]
      })
    }

    if(action.status === "inprogress"){
    let updatedCards = state.inProgressCards.filter( card => {
      return card.id !== action.id
      })
        return Object.assign({}, state, {
        inProgressCards: [
          ...updatedCards
       ]
      })
    }

    break;

    case "BACK_CARD":
    if(action.status === "done"){
      let updatedCards = state.doneCards.filter( card => {
        return card.id !== action.id
      })
        return Object.assign({}, state, {
        doneCards: [
          ...updatedCards
        ]
      })
    }

    if(action.status === "inprogress"){
    let updatedCards = state.inProgressCards.filter( card => {
      return card.id !== action.id
    })
      return Object.assign({}, state, {
      inProgressCards: [
      ...updatedCards
      ]
      })
    }

    break;

    default:
      return state;
  }
}
