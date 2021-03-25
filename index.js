// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}


// Add your changeCompletely() function here:
function changeCompletely(element, array, index) {
  return `Mmmm, ${fruit}!!!`;
}

const array = ["apple", "banana", "cherry"];

doToElementsInArray(array, changeCompletely);

return array;
