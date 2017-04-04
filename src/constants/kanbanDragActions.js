let observer = null;

// cardPositon = "todo";

let cardPosition = "todo";

function emitChange(){
  observer(cardPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveCard(toX){
  console.log("YOOOOOOOOOOO THIS IS THE FUNCTION ON DROP")
}