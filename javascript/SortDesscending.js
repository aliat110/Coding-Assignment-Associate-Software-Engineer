// B. Perform sorting of an array in descending order.

function reverseSort(arr) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < arr.length; i += 1) {
        if (arr[i - 1] < arr[i]) {
          done = false;
          var tmp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = tmp;
        }
      }
    }
  
    return arr;
  }
  
  var numbers = ['12, 10, 15, 11, 14, 13, 16'];
  reverseSort(numbers);
  console.log(numbers);