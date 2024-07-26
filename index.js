// 1-masala

// let arr = [];
// let num = +prompt("son kiriting");
// for(let i = 1; i <= num; i++){
//     arr.push(i);
// }
// console.log(arr);

// 2-masala

// let arr = [1,2,3,4,5,6,7,8,9];
// let juft = 0;
// let toq = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 ==1) {
//         toq += arr[i];
//     } else{
//         juft += arr[i];
//     }
// }

// console.log("toq sonlar yeg'indisi", toq);
// console.log("juft sonlar yeg'indisi", juft);

// 3-masala

// let sum = 0;
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let res = arr1.concat(arr2);
// for(let i = 0; i < res.length; i++){
//     sum += res[i];
// }
// console.log(sum);

// 4-masala

// let arr = [1,2,3,4,5,6];
// let res = [];

// for(let i = 0; i < arr.length; i++){
//     res.unshift(arr[i]);
// }

// console.log(res);

// 5-masala

// let arr = [3,5,7,9];
// let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i]
//     }
//   }

//   let res = min * min * min * min;
//   console.log(res);

// ======BOSHQA MASALALAR=====

// 2-masala

// let arr = ["hello world", 1,2,3];
// let res ;
// for(let i = 0; i<arr.length; i++){
// if (typeof arr[i] == 'string') {
//     res = arr[i].length
// }
// }
// console.log(res);

// 3-masala

// let arr = [1,2,3,4,5];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     res.push((arr[i] += 1));
//   }
// }
// console.log(res);

// 4-masala

// let arr = [2,3,3,8,22,12];
// for(let i = arr.length-1; i>=0; i--){
// if (arr[i] % 2 == 1) {
//     arr[i] = 0
// }
// }
// console.log(arr);

// 5-masala

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = i;
// }
// console.log(arr);

// 6-masala

// let arr = [4,15,20,30,60];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 != 0) {
//         res.push(arr[i])
//     }
// }
// console.log(res);

// 7-masala

// let arr = [1,2,3,4,5,6];
// let res = [];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         sum = sum + arr[i];
//     }
//     if(sum % arr[i] == 0){
//         res.push(arr[i])
//     }
// }
// console.log(sum);
// console.log(res);

// 8-masala

// let arr = [5,6,7,8,9];
// for (let i = 1 ; i < arr.length; i++) {
//     arr[i] -= 1
// }
// console.log(arr);

// 9-masala

// let arr = [1,-2,3,-4,5,-6];
// let res = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//          res.push(arr[i]);
//     }
// }
// console.log(res.length);

// 10-masala

// let arr = [1,-2,3,-4,5,-6];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         sum = sum + arr[i];
//     }
// }
// console.log(sum);

// 12-masala

// let arr = [1,-2,3,-4,5,-6];
// let p = 1;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         p = p * arr[i];
//     }
// }
// console.log(p);

// 13-masala

// let arr = ["bmw", "mersedes", "audi","chevrolet"];
// let uzun = arr[0];
// let qisqa = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > uzun.length) {
//         uzun = arr[i];
//     }
//     if (arr[i].length < qisqa.length) {
//         qisqa = arr[i];
//     }
// }
// console.log("Eng uzun satr -", uzun);
// console.log("Eng qisqa satr -", qisqa);
