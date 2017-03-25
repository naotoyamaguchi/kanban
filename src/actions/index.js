export const ADD_TODOCARD = 'ADD_TODOCARD';
export const ADD_INPROGRESSCARD = 'ADD_INPROGRESSCARD'

function addCard(title, author, priority, status, createdBy, assignedTo){
  return {
    type: status,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  }
}

export default addCard;