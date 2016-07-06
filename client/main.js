if (Meteor.isClient) {
  //Use this for scaling maps
  //If change, remeber to modify scale.less file on the client/styles folder
  cellSize = 30; //One cell is 5 feets
  pixelToFeet = 5/cellSize; //Multiplier to get feets from pixels
}
