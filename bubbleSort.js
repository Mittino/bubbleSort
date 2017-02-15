function bubbleSort(array){
  var done = false;
  while (!done){
    var i;
    done = true;
    for (i=0; i<array.length; i++){
      if (array[i-1] > array[i]){
        done = false;
        [array[i-1], array[i]] = [array[i], array[i-1]];
      }
    }
  }
  return array;
}

var testArray = [1,4,2,0];
console.log(bubbleSort(testArray));
