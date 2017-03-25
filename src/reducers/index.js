import { ADD_TODOCARD, ADD_INPROGRESSCARD } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  toDoCards: [],
  inProgressCards: [],
  doneCards: []
}

export function toDoCards(state = initialState, action) {
  switch(action.type) {
    case "todo":
      return Object.assign({}, state, {
  toDoCards: [
    ...state.toDoCards,
    {
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
      title: action.title,
      status: action.status,
      createdBy: action.createdBy,
      assignedTo: action.assignedTo,
      priority: action.priority
    }
  ]
      })

    default:
      return state;
  }
}

// export function inProgressCards(state = initialState, action) {
//   console.log(action)
//   switch(action.type) {
//     case "inprogress":
//       return Object.assign({}, state, {
//   inProgressCards: [
//     ...state.inProgressCards,
//     {
//       title: action.title,
//       status: action.status,
//       createdBy: action.createdBy,
//       assignedTo: action.assignedTo,
//       priority: action.priority
//     }
//   ]
//       })
//     default:
//       return state;
//   }
// }

// export const reducer = combineReducers({
//   toDoCards,
//   inProgressCards
// })