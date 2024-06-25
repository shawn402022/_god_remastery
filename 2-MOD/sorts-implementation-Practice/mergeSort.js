let array = [5,8,4,9,10,11,35,73,0];

function mergeSort(arr) {
    let copy = [...arr];

    if(arr.length < 2) return arr;

    const half = copy.length /2;
    const left = copy.splice(0,half);

    return merge(mergeSort(left), mergeSort(copy))
}

function merge(arrA, arrB) {
    let result = [];

    while(arrA.length && arrB.length) {
        if(arrA[0] < arrB[0]) {
            result.push(arrA.shift());
        } else {
            result.push(arrB.shift())
        }
    }
    return[...result, ...arrA, ...arrB];
}

console.log(mergeSort(array))
