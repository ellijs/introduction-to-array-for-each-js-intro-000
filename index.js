// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}


// Add your changeCompletely() function here:
function changeCompletely(element, array, index) {
  array[index] = Math.floor(Math.random() * 100).toString() + `${array[index]}s!!!`;
}

var animals = ["dog". "cat", "squarrel"];

console.log(animals);
