let array = [5,8,4,9,10,11,35,73,0]

function bubbleSort(arr){
    let swapped = true;

    while(swapped){
        swapped = false;

        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                console.log(arr.join(","));
                swapped = true;
            }
        }
    }
    return arr
}

console.log(bubbleSort(array))
