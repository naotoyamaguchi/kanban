
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

export function updateCard(id, title, author, priority, status, createdBy, assignedTo){
  return {
    type: `UPDATE_`,
    status,
    id
  }
}

export function deleteCard(id, title, author, priority, status, createdBy, assignedTo){
  return {
    type: `UPDATE2_`,
    status,
    id
  }
}

export function deupdateCard(id, title, author, priority, status, createdBy, assignedTo){
  console.log("depdateCard actions.js status", status)
  return {
    type: `DEUPDATE_`,
    status,
    id
  }
}

export function deleteCard2(id, title, author, priority, status, createdBy, assignedTo){
  console.log("deleteCard2 actions.js", status)
  return {
    type: `DEUPDATE2_`,
    status,
    id
  }
}


// export default addCard;