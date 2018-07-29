function findThingInArray(sourceArray, searchItem) {
  for (var i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === searchItem) {
      alert(i);
      break;
    } else {
      continue;
    }
  }
}

var myArray = [1, 44, 23, 5, "a", "b", "n", 87, 7];
var thingImLookingFor = "n";

findThingInArray(myArray, thingImLookingFor);
