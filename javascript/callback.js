const array = [1, 2, 3, 4, 5];

// Example callback function
function arrayMap(arr, callback) {
  for (const index in arr) {
    arr[index] = callback(arr[index]);
  }
  return arr;
}

// Callback with named function
console.log(
  arrayMap(array, function (items) {
    return items * 2;
  })
);

//callback with arrow function
console.log(arrayMap(array, (items) => items * 3));
console.log(arrayMap(array, (items) => items + 5));
console.log(
  arrayMap(array, (items) => {
    return items + 1;
  })
);


//function นี้จะรอเรียก callback เมื่อถึงเวลา
setTimeout(() => {
  console.log("รอ 2 วินาที");
}, 2000);
