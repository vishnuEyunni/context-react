let arr = [901, 112, 103, 510, 51];

// we are looping through different array n times, to figure out nth largest

// const get3Largest = (arr, count) => {
//   let max = 0;
//   if(count == 0){
//     return
//   }
//   for(let i=0;i<arr.length;i++){
//     if (max < arr[i]){
//       max=arr[i];
//     }
//   }
//   let indx = arr.indexOf(max);
//   let newArr = arr.filter(x => x!=arr[indx])
//   console.log(max);
//   return max + get3Largest(newArr,count-1);
// }
// get3Largest(arr,3);

const get3rdLargest = (arr) => {
  if (arr.length < 3) {
    console.log("Invalid input");
    return;
  }
  let max = 0;
  let secondMax = 0;
  let thirdMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      thirdMax = secondMax;
      secondMax = max;
      max=arr[i];
    } else if (secondMax < arr[i])
    {
      thirdMax = secondMax;
      secondMax = arr[i];
    } else {
      if(thirdMax < arr[i])
        thirdMax = arr[i] 
    }
  }
  console.log(max);
  console.log(secondMax);
  console.log(thirdMax);
}

get3rdLargest(arr);