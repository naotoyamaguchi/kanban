
export const UPDATE_STATUS = 'UPDATE_STATUS'

export function addCard(id, title, author, priority, status, createdBy, assignedTo){
  return {
    type: status,
    id,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  }
}

export function moveCardRight(id, title, author, priority, status, createdBy, assignedTo){
  return {
    type: `MOVE_CARD_RIGHT`,
    status,
    id,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  }
}

export function moveCardLeft(id, title, author, priority, status, createdBy, assignedTo){
  return {
    type: `MOVE_CARD_LEFT`,
    status,
    id,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  }
}

export function nextCard(id, title, author, priority, status, createdBy, assignedTo){
  return {
    type: `NEXT_CARD`,
    status,
    id,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  }
}

export function backCard(id, title, author, priority, status, createdBy, assignedTo){
  console.log("backCard FROM actions.js", status)
  return {
    type: `BACK_CARD`,
    status,
    id,
    title,
    priority,
    status,
    createdBy,
    assignedTo
  }
}
