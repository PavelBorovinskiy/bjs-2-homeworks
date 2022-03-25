function compareArrays(arr1, arr2) {

    let result;



    return result = arr1.length == arr2.length && arr1.every((value, idx) => value == arr2[idx]); // boolean
}



function advancedFilter(arr) {
    //let resultArr = arr.filter(positiveNumbers).filter(multiples).map(multiplication);

    //    function positiveNumbers(arr) {
    //         return arr > 0;
    //     }

    //     function multiples(arr) {
    //         return arr % 3 === 0;
    //     }

    //     function multiplication(arr) {
    //         return arr * 10;
    //     } 
    let resultArr;


    return resultArr = arr.filter((element) => element > 0).filter((element) => element % 3 === 0).map((element) => element * 10); // array
}