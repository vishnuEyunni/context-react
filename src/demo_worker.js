self.onmessage = (e) => {
  console.log("In web worker => ", e.data);
  self.postMessage("Okay!!");
}