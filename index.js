//BÀI 1

// let dayso = prompt("Bạn hãy nhập vào một dãy các số nguyên (các số được cách nhau bằng dấu cách:) ");
// let inputArray = dayso.split(' ');
// console.log(inputArray);

// function adjacentElementsProduct(inputArray) {
//     var n = Number.NEGATIVE_INFINITY;
//     for(var i=0;i<inputArray.length-1;i++){
//         if(inputArray[i]*inputArray[i+1] > n){
//           n = inputArray[i]*inputArray[i+1];
//         }
//     }
//   return n;
// }

// console.log(adjacentElementsProduct(inputArray));


//BÀI 2


let dayso = prompt("Bạn hãy nhập vào một dãy các số nguyên (các số được cách nhau bằng dấu cách:) ");
let arr  = dayso.split(' ');
console.log(arr);

const alternating_sum = (arr)=> {
    let s1 = 0, s2 = 0;
    for (let i = 0; i < arr.length; i++){
        if (i%2==0)
            s1+=arr[i] 
        else 
            s2+=arr[i]
    }

    return [s1, s2]
}




