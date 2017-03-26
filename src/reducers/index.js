// import { ADD_TODOCARD, ADD_INPROGRESSCARD } from '../actions';
// import { combineReducers } from 'redux';

const initialState = {
  toDoCards: [],
  inProgressCards: [],
  doneCards: []
}

export function toDoCards(state = initialState, action) {
  console.log("top action" , action.status);
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

    case "UPDATE_"+action.status:

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

    case "UPDATE2_"+action.status:
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

    case "DEUPDATE_"+action.status:

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
      console.log("ACTION", action)
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

    case "DEUPDATE2_"+action.status:
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
    let updatedCards = state.toDoCards.filter( card => {
      return card.id !== action.id
    })
      return Object.assign({}, state, {
      toDoCards: [
      ...updatedCards
      ]
      })
    }

    default:
      return state;
  }
}
