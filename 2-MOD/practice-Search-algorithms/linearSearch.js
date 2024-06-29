function linearSearch(arr,target){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element === target) return i
    }
    return -1
}


console.log(linearSearch([2,4,6,8], 6));  // 2
console.log(linearSearch([2,4,6,8], 10));  // -1
