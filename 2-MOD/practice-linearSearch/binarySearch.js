function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1;
    let mid =Math.floor ((start + end) / 2)

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];


    }
}

console.log(binarySearch([2,4,6,8], 6));  // 2
console.log(binarySearch([2,4,6,8], 10));  // -1
