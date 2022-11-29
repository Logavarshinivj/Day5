// 1.Print odd numbers in an array

// 1-ANNONYMOUS FUNCTION:

// var result=[];
//   var odd=function(arr){
//       for(var i=0;i<arr.length;i++){
//           if(arr[i]%2!=0){
//               result.push(arr[i])
//           }
          
//       }
//       return result;
//   }
//   console.log(odd([2,3,4,5,6,7,8,9,10]));

// OUTPUT:
// [3, 5, 7, 9]




// 2-IIFE FUNCTION:

// (function odd(arr){
//     var result=[];
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             result.push(arr[i])
//         }
//     }
//     console.log(result)
// })
// ([22,33,44,55,88,99,11])

// OUTPUT:
// [33, 55, 99, 11]




// 3-ARROW FUNCTION:

// var odd=(arr)=>{
//     var result=[];
//     for(var i=0;i<arr.length;i++){
//         result.push(arr[i])
//     }
//     return result;
// }
// console.log(odd([21,89,56,23,78,63]))

// OUTPUT:
// [21, 89, 56, 23, 78, 63]




// 2.Sum of all numbers in an array

// 1.ANNONYMOUS Function:

// var sumofarray=function(arr){
//     var sum=0
//     for(var i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum
// }
// console.log(sumofarray([2,3,45]))

// OUTPUT:
// 50




// 2.IIFE FUNCTION:
// (function sumofarray(arr){
//     var sum=0
//     for(var i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//      }
//      console.log(sum)
//  })
//  ([9,8,7])

//  OUTPUT:
//  24




// 3.ARROW FUNCTION:

// var sumofarray=(arr)=>{
//     var sum=0
//     for(var i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//      }
//      return sum;
// }
// console.log(sumofarray([3,4,4,5]))

// OUTPUT:
// 16


// 3.Print prime numbers in an array:

// 1.ANNONYMOUS Function:

// // var sortArray=[];
// // var isPrime=function(arr){
// //     arr.forEach(num=>{
// //         let factor=0;
// //         for(var i=0;i<=num;i++){
// //             if(num%i==0){
// //                 factor++
// //             }
// //         }
// //             if(factor==2){
// //                 sortArray.push(num)
// //             }
        
// //     })
// //     console.log(sortArray)
// // }
// // isPrime([13,14,15,16,17,18,19,23])

// OUTPUT
// [13,17,19,23]

// 2.IIFE Function:

// // (function isPrime(arr){
// //     var sortArray=[];
// //     arr.forEach(num=>{
// //         let factor=0
// //         for(var i=0;i<=num;i++){
// //             if(num%i==0){
// //                 factor++
// //             }
// //         }
// //         if (factor==2){
// //             sortArray.push(num)
// //         }
// //     })
// //     console.log(sortArray)
// // })

// // ([13,14,15,16,17,18,19])

// // //OUTPUT:
// [13, 17, 19]


// 3.ARROW FUNCTION


// var sortArray=[];
// var isPrime=(arr)=>{
//     arr.forEach(num=>{
//         var factor=0;
//         for(var i=0;i<=num;i++){
//             if(num%i==0){
//                 factor++
//             }
//         }
//         if(factor==2){
//             sortArray.push(num)
//         }
//     })
// console.log(sortArray)
// }
// isPrime([23,33,43,58,67,90])

// OUTPUT:
// [23, 43, 67]


//4.Return all the palindromes in an array

// 1.ANNONYMOUS Function

// var isPalindrome=function(arr){
//     //var a= arr.toString()
//     var arr1=[];
//     for(var i=0;i<arr.length;i++){
//         var a=arr[i].toString()
//         var b=a.split("")
//         var c=b.reverse()
//         var d=c.join("")
//         if(a==d){
//             arr1.push(a)
//         }
//         //console.log(arr)
//     }
//     console.log(arr1)
// }
// isPalindrome(["varsh","gold","level","car","dad","mum",])

// OUTPUT:
//['level', 'dad', 'mum']


//2.IIFE FUNCTION: 

// (function isPalindrome(arr){
//     var arr1=[];
//     for(var i=0;i<arr.length;i++){
//         var a=arr[i].toString()
//         var b=a.split("")
//         var c=b.reverse()
//         var d=c.join("")
//         if(a==d){
//             arr1.push(a)
//         }
//     }
//     console.log(arr1)
// })
// (["varsh","gold","level","car","dad","mum"])

// OUTPUT:
//['level', 'dad', 'mum']


//3.ARROW FUNCTION:

// var isPalindrome=(arr)=>{
//     var arr1=[];
//     for(var i=0;i<arr.length;i++){
//         var a=arr[i].toString()
//         var b=a.split("")
//         var c=b.reverse()
//         var d=c.join("")
//         if(a==d){
//             arr1.push(a)
//         }
// }
// console.log(arr1)
// }
// isPalindrome(["varsh","gold","level","car","dad","mum"])


// OUTPUT:
//['level', 'dad', 'mum']


//5.Convert all the strings to title caps in a string array
//1.ANNONYMOUS FUNCTION
// var tocaps=function(arr){
//     var arr1=[];
//     for(var i=0;i<arr.length;i++){
//         var a=arr[i].toString()
//         var b=a.toUpperCase()
//         arr1.push(b)

//     }
//     console.log(arr1)
// }
// tocaps(["varsh","loga","madesh","kumar"])


//2.IIFE FUNCTION
// (function tocaps(arr){
//     var arr1=[];
//     for(var i=0;i<arr.length;i++){
//         var a=arr[i].toString()
//         var b=a.toUpperCase()
//         arr1.push(b)
// }

// console.log(arr1)
// })
// (["varsh","loga","madesh","kumar"])

// OUTPUT:
//['VARSH', 'LOGA', 'MADESH', 'KUMAR']

//3.ARROW FUNCTION

// var tocaps=(arr)=>{
//     var arr1=[];
//     for(var i=0;i<arr.length;i++){
//         var a=arr[i].toString()
//         var b=a.toUpperCase()
//         arr1.push(b)
//     }
//     console.log(arr1)
// }
// tocaps(["varsh","loga","madesh","kumar"])
// OUTPUT:
//['VARSH', 'LOGA', 'MADESH', 'KUMAR']

//6.Remove duplicates from an array

//1.ANNONYMOUS FUNCTION
// var duplicates=function(arr){
//     const unique=[...new Set(arr)]
//     console.log(unique)
// }
// duplicates([1,2,2,3,1,5,6,7,8,5,6])
//OUTPUT:
//[1, 2, 3, 5, 6, 7, 8]





//2.IIFE FUNCTION

// (function duplicates(arr){
//     const unique=[...new Set(arr)]
//     console.log(unique)
// })
// (["a","d","e","d","g","a","i","j","e","i","g"])

//OUTPUT:
//['a', 'd', 'e', 'g', 'i', 'j']


