export function updateStatus(card, newStatus){
  return new Promise(function(resolve, reject){
    function reqListener(){
      resolve(card)
    }

    let oReq = new XMLHttpRequest();
    oReq.open("PUT", `api/card/status-update/${card.id}`, true);
    oReq.addEventListener("load", reqListener)
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    oReq.send(`id=${card.id}&title=${card.title}&priority=${card.priority}&status=${newStatus}&createdBy=${card.createdBy}&assignedTo=${card.assignedTo}`)
  })
}