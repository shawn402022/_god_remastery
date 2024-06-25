let array = [5,8,4,9,10,11,35,73,0]

function insertionSort(arr){
    let divider = 1;

    while(divider < arr.length){
        console.log(arr.join(','));

        let val = arr[divider];

        let i = divider;
        while(i>0){
            if(arr[i-1] < val) {
                break;
            } else {
                arr[i] = arr[i-1];
                i--;
            }
        }
        arr[i] = val;
        divider++
    }
    return arr

}

console.log(insertionSort(array))
