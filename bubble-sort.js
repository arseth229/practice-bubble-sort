
function bubbleSort(arr) {

    // Iterate through the array
  let swap = true;
  while (swap === true) {
    swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
        console.log(arr.join(','));
      }
    }
  }
  return arr;
    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;