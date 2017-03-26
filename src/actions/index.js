
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const MOVE_CARD_RIGHT = 'MOVE_CARD_RIGHT'
export const MOVE_CARD_LEFT = 'MOVE_CARD_LEFT'
export const NEXT_CARD = 'NEXT_CARD'
export const BACK_CARD = 'BACK_CARD'
export const DELETE_CARD = 'DELETE_CARD'

export function addCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt){
  return {
    type: status,
    id,
    title,
    priority,
    status,
    createdBy,
    assignedTo,
    createdAt,
    updatedAt
  }
}

export function moveCardRight(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt){
  return {
    type: `MOVE_CARD_RIGHT`,
    status,
    id,
    title,
    priority,
    createdBy,
    assignedTo,
    createdAt,
    updatedAt
  }
}

export function moveCardLeft(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt){
  return {
    type: `MOVE_CARD_LEFT`,
    status,
    id,
    title,
    priority,
    createdBy,
    assignedTo,
    createdAt,
    updatedAt
  }
}

export function nextCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt){
  return {
    type: `NEXT_CARD`,
    status,
    id,
    title,
    priority,
    createdBy,
    assignedTo,
    createdAt,
    updatedAt
  }
}

export function backCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt){
  return {
    type: `BACK_CARD`,
    status,
    id,
    title,
    priority,
    createdBy,
    assignedTo,
    createdAt,
    updatedAt
  }
}

export function deleteCard(id, title, author, priority, status, createdBy, assignedTo, createdAt, updatedAt){
  console.log("backCard FROM actions.js", status)
  return {
    type: `DELETE_CARD`,
    status,
    id,
    title,
    priority,
    createdBy,
    assignedTo,
    createdAt,
    updatedAt
  }
}
