// 1) створити функцію яка приймає масив та виводить його

// function takeArray (arr){
//     console.log(arr);
// }

// let numbers = [1, 2, 3, 40000, 5];

// takeArray(numbers);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function fillWithRandom (arr){
//   for (i = 0; i < 10; i++){
//     arr.push(Math.floor(Math.random() * 100));   
//   }
//   takeArray(arr);
// }

// let random = [];

// fillWithRandom(random);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumber (a, b, c){
//     if (a < b && a < c){
//         console.log(a);
//     }
//     else if (b < a && b < c){
//         console.log(b);
//     }
//     else
//     console.log(c);
// }

// minNumber(110, 45, 400);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber (a, b, c){
//     if (a > b && a > c){
//         console.log(a);
//     }
//     else if (b > a && b > c){
//         console.log(b);
//     }
//     else
//     console.log(c);
// }

// maxNumber(34, 21, 399);

// 5) створити функцію яка повертає найбільше число з масиву

// function biggestInArray (arr){
//     return Math.max.apply(null, arr);
// }

// let bigNumbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// let bigNumber = biggestInArray(bigNumbers);

// console.log(bigNumber);

// 6) створити функцію яка повертає найменьше число з масиву

// function smallestOne (arr){
//     return Math.min.apply(null, arr);
// }

// let smallNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let smallNumber = smallestOne(smallNumbers);

// console.log(smallNumber);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function totalSum (arr){

//     let sum = 0;

//     for (i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }

//     return sum
// }

// let bill = [41, 34, 22, 76, 1000, 30, 55];

// let total = totalSum(bill);
// console.log(total);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function averageNumber (arr){
    
//     let sum = 0;

//     for  (let each of arr){
//         sum += each;
//     }

//     let average = sum / arr.length;
    
//     return average
// }

// let bill = [10, 20, 30, 40, 50, 60, 70];

// let ave = averageNumber(bill);
// console.log(ave);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// let users = [
//     {id: 1, status: true}, {name: 'Andrian', age: 23}, {animal: 'dog', mood: 'happy'}
// ]

// function keysOfObjects (arr){

//     let keys = [];

//     for (let x of arr){
//         for (let y in x)
//             keys.push(y);
//     }

//     return keys

// }

// let a = keysOfObjects(users);
// console.log(a);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// function valuesOfObjects (arr){

//     let values = [];

//     for (let x of arr){
//         Object.values(x).forEach(val => values.push(val))
//     }

//     return values

// }

// let b = valuesOfObjects(users);
// console.log(b);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let prima = [1, 1, 1, 1];
// let seconda = [2, 2, 2, 2];

// function addItems (arr1, arr2){

//     let sum = [];

//     for (let i = 0; i < arr1.length; i++){
//         sum.push(arr1[i] + arr2[i]);
//     }

//     return sum

// }

// let bla = addItems(prima, seconda);

// console.log(bla);

// ==============================================================
// CLASSWORK


// - створити функцію яка обчислює та повертає площу прямокутника

// function rectangleArea (a, b){
//     return (a * b);
// }

// let room = rectangleArea(5, 8);
// console.log(room);

// - створити функцію яка обчислює та повертає площу кола

// function circleArea (x){
//     return (Math.PI * Math.pow(x,2));
// }

// let hole = circleArea(2);
// console.log(hole);

// - створити функцію яка обчислює та повертає площу циліндру

// function cylinderArea (r, h){
//     return (2 * (Math.PI * Math.pow(r, 2)) + 2 * Math.PI * r * h);
// }

// let constuction = cylinderArea(4, 9);
// console.log(constuction);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено)

// function returnMinPrintMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) max = item;
//         if (item < min) min = item
//     } console.log(max)
//     return min;
// }

// let minimal = returnMinPrintMax(92, 354, 404, 283)
// console.log(minimal);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function changeOrder(arr, i){

    for (let x = 0; x < arr.length; x++){
        
        if (x === i){
            let sliced = arr.slice(x, x+1)
            arr[x] = sliced;
            arr[x+1] = arr[x];
            return arr
        }
        
        
    }
}

let replacedArray = changeOrder([2, 3, 4 ,5], 1);
console.log(replacedArray);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

// function ExeptZero (arr=[]){
//     let n=0;     
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]===0){
//             arr.splice(i,1);
//             n++;       
//             i--;
//         }
//     }
//     for(let j=0; j<n;j++){
//         arr.push(0);
//     }
// }