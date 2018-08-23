function findMinAndRemoveSorted (arr) {
  let min;
  
  arr.forEach((num) => {
    if (min === undefined || num <= min) {
      min = num
    })
  }
  return min
}

function merge(firstArr, secondArr) {
  
}

function mergeSort() {
  
}
