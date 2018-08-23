function findMinAndRemoveSorted(arr) {
  return arr.shift();
}

function merge(firstArr, secondArr) {
  let sorted = [];
  
  while (firstArr.length !== 0 && secondArr.length !== 0) {
    if (firstArr[0] < secondArr[0]) {
      sorted.push(findMinAndRemoveSorted(firstArr));
    } else {
      sorted.push(findMinAndRemoveSorted(secondArr));
    }
  }
  return sorted.concat(firstArr).concat(secondArr)
}

function mergeSort(arr) {
  
}
