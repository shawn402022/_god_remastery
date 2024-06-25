let array = [5,8,4,9,10,11,35,73,0];


function selectionSort(arr){
    let divider = 0;

    while(divider < arr.length) {
        console.log(arr.join(","));

        let minIndex = divider;
        for(let i = divider+1; i < arr.length; i++){
            if(arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }

        let min = arr[minIndex];
        for (let j = minIndex; j > divider; j--) {
            arr[j] = arr[j-1]

        }
        arr[divider] = min;
        divider++
    }
    return arr
}

console.log(selectionSort(array))
