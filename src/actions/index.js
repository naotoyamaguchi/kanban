
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
  console.log("update 1")
  return {
    type: `UPDATE_${status}`,
    status,
    id
  }
}

export function deleteCard(id, title, author, priority, status, createdBy, assignedTo){
  console.log("update 2");
  return {
    type: `UPDATE2_${status}`,
    status,
    id
  }
}

export function deupdateCard(id, title, author, priority, status, createdBy, assignedTo){
  return {
    type: `DEUPDATE_${status}`,
    status,
    id
  }
}

export function deleteCard2(id, title, author, priority, status, createdBy, assignedTo){
  console.log("deupdate 1 One 1 One")
  return {
    type: `DEUPDATE2_${status}`,
    status,
    id
  }
}


// export default addCard;