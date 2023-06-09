arr1 = [1,3,8,5,8,9,3,4,5,8]
arr2 = [1,5,7,3,9,2,4,2,4,6]


// sort array from low to high
function sortArray(array){
    newArray = []
    for( i=0 ; i<array.length ; i++ ){
        if( i==0 ){
            newArray.push(array[i])
            continue
        }

        for( x=0 ; x<newArray.length ; x++ ){
            if(array[i] < newArray[x]){                
                newArray.splice(x, 0, array[i]);
                break
            }
        } 
        if(array[i] > newArray[newArray.length-1]){
            newArray.push(array[i]);
        }      
    } 
    return newArray;
}

//filter array1 with data in array2
function filterArray(array1, array2){
    filterArr1 = []
    index = 0

    array1.forEach(element => {
        for(i=index; i<array2.length; i++){

            if(!isNaN(element)){
                if(element > array2[i]){
                    index=i
                    continue
                } else if ( element == array2[i]){
                    filterArr1.push(element)
                    index=i
                    break
                } else if ( element < array2[i]){
                    index=i-1
                    break
                }
            }
        }
    })    
    return filterArr1;
}

sortedArr1 = sortArray(arr1)
sortedArr2 = sortArray(arr2)
filterArr = filterArray(sortedArr1, sortedArr2)

console.log(`sortedArr1 = ${sortedArr1}`)
console.log(`sortedArr2 = ${sortedArr2}`)
console.log(`filterArr = ${filterArr}`)