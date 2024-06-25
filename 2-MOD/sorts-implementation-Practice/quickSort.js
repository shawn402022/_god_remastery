let array = [5,8,35,11,10,9,4,73,0];


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex -1);
        //right
        quickSort(arr, pivotIndex+1, right);
    }

    return array
}

const  swap =  (arr,idx1,idx2) => {
    [[arr[idx1]],[arr[idx2]]] = [[arr[idx2]],[arr[idx1]]]
}



function pivot (arr,start = 0, end = arr.length +1){
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx)

        }
    }
    swap(arr, start, swapIdx)

    console.log(arr)
    return swapIdx


}
console.log(quickSort(array))
console.log(pivot(array))
