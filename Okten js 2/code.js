// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [1, 2, 3, 3.14, -14]; 
// let words = ['file', 'okten', 'js', 'retro', 'Petro'];
// let everything = [true, false, 12, '34', 'nike'];

// console.log(numbers);
// console.log(words);
// console.log(everything);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let empty = [];

// empty[0] = 0;
// empty[1] = 123;
// empty[2] = true;
// empty[3] = 'true';
// empty[4] = 'zero';

// console.log(empty);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (i = 0; i <= 9; i++) {
//     document.write(
//         '<div>block div</div>'
//         )
// }

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (i = 0; i <= 9; i++) {
//     document.write(
//         `<div>${i} block div</div>`
//         )
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// i = 0;

// while (i <= 19) {
//     document.write(
//         `<h1>Here comes the money<h1>`
//     )
//     i++
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// i = 0;

// while (i <= 19) {
//     document.write(
//         `<h1>Here comes the money ${i}<h1>`
//     )
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let nonsense = [54, 555, 93, 0.93, 234567, -122, 1, 34, -2, 0.22];

// for (let i of nonsense) {
//     console.log(i);
// }

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let names = ['Andrian', 'Ksenia', 'Ivan', 'Vika', 'Yura', 'Roman', 'Eva', 'Anna', 'Vova', 'Petya'];

// for (let name of names) {
//     console.log(name);
// }

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let anything = [true, false, 123, 0.23, -2, '2', 'Andrian', 'okten', 'one', 'love'];

// for (let i of anything) {
//     console.log(i);
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. 
// За допомогою if та typeof вивести тільки булеві елементи

// let anything = [true, false, 123, 0.23, -2, '2', 'Andrian', 'okten', 'one', 'love'];

// for (let x of anything) {
//     let correct = x;
//     if (typeof correct === "boolean"){
//         console.log(correct);
//     }
// }

// За допомогою if та typeof вивести тільки числові елементи

// for (let x of anything) {
//     let correct = x;
//     if (typeof correct === "number"){
//         console.log(correct);
//     }
// }

// За допомогою if та typeof вивести тільки рядкові елементи

// for (let x of anything) {
//     let correct = x;
//     if (typeof correct === "string"){
//         console.log(correct);
//     }
// }

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let empty = [];

// empty[0] = 123;
// empty[1] = 321;
// empty[2] = 0.3;
// empty[3] = 'level';
// empty[4] = 'apple';
// empty[5] = 'orange';
// empty[6] = true;
// empty[7] = false;
// empty[8] = ['vitya', 'petya', 'vasya'];
// empty[9] = {name: 'andrian', status: true, age: 23};

// for (let x of empty){
//     console.log(x);
// }

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i <= 9; i++){
//     console.log(`${i}`);
// }

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i <= 99; i++){
//     console.log(`${i}`);
//     document.write(`${i}`);
// }

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i <= 99; i+=2){
//     console.log(`${i}`);
//     document.write(`${i}`);
// }

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i = 0; i <= 99; i=(i+2)){
//     console.log(`${i}`);
//     document.write(`${i}`);
// }

// for (i = 0; i <= 99; i++){
//     if ([i] % 2 === 0){
//     console.log(`${i}`);
//     document.write(`${i}`);
//     }
// }

// for (i = 0; i <= 99; i++){
//     if ([i] % 2 !== 0){
//     console.log(`${i}`);
//     document.write(`${i}`);
//     }
// }

// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },

// let usersWithCities=[];

// for( let i=0; i < usersWithId.length; i++){
//     for ( const city of citiesWithId ){
//         if (usersWithId[i].id === city.user_id) {
//             usersWithCities[i] = usersWithId[i];
//             usersWithCities[i].address = city;
//         }
//     }
// };

// console.log(usersWithCities);


// ======================================================================================

// classwokr


// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let x = ['a', 'b', 'c'];

// for (i = 1; i <= 3; i++){
//     x.push(i);
//     console.log(x);
// }

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let x = [3, 2, 1];

// for (i = 2; i>= 0; i--){
//     console.log(x)
// }

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let x = [1, 2, 3];

// for (i = 4; i <= 6; i++){
//      x.push(i);
//      console.log(x);
//  }

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let x = [1, 2, 3];

// for (i = 4; i<= 6; i++){
//     x.unshift(i);
//     console.log(x);
// }

// Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].

// let x = [1, 2, 3, 4, 5];

// console.log(x.slice(3));

// console.log(x.slice(0,2));

// x.splice(3,6, 'a', 'b', 'c');
// console.log(x);


// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let n of num){
//     if(n % 2 === 0){
//         console.log(n);
//     }
// }

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numbers = [];

// for (let n of num){
//     numbers.push(n); 
// }

// console.log(numbers);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let alfa = ['a', 'b', 'c'];
// let str = ""

// for (i = 0; i < alfa.length; i++){
//     str = str + alfa[i];
// }

// console.log(str);

// i = 0;

// while (i < alfa.length){
//     str = str + alfa[i];
//     i++
// }

// console.log(str);

// for (let x of alfa){
//     str = str + x;
// }

// console.log(str);

// for (let x in alfa){
//     str = str + alfa[x];
// }

// console.log(str);

// =====ДОДАТКОВО 1=======

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let mas = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

// i = 0;

// while(i < mas.length){
//     console.log(mas[i]);
//     i++
// }

// 2. перебрати його циклом for

// for (i = 0; i < mas.length; i++){
//     console.log(mas[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i = 0;

// while(i < mas.length){
//     if (mas[i] % 2 !== 0){
//         console.log(mas[i]);
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (i = 0; i < mas.length; i++){
//     if (mas[i] % 2 !== 0){
//         console.log(mas[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// i = 0;

// while(i < mas.length){
//     if (mas[i] % 2 === 0){
//         console.log(mas[i]);
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (i = 0; i < mas.length; i++){
//     if (mas[i] % 2 === 0){
//         console.log(mas[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (i = 0; i < mas.length; i++){
//         if (mas[i] % 3 === 0){
//             mas[i] = 'okten';
            
//         }
//         console.log(mas[i]);
//     }

// 8. вивести масив в зворотньому порядку.

// for (i = mas.length - 1; i >= 0; i--){
//     console.log(mas[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// i = mas.length - 1;

// while(i >= 0){
//     console.log(mas[i]);
//     i--
// }

// i = mas.length - 1;

// while(i >= 0){
//      if (mas[i] % 2 !== 0){
//         console.log(mas[i]);
//     }
//     i--
// }

// i = mas.length - 1;

// while(i >= 0){
//     if (mas[i] % 2 === 0){
//         console.log(mas[i]);
//     }
//     i--
// }

// for (i = mas.length - 1; i >= 0; i--){
//         if (mas[i] % 2 !== 0){
//             console.log(mas[i]);
//         }
//     }

// for (i = mas.length - 1; i >= 0; i--){
//     if (mas[i] % 2 === 0){
//             console.log(mas[i]);
//         }
//     }


// for (i = mas.length - 1; i >= 0; i--){
//         if (mas[i] % 3 === 0){
//             mas[i] = 'okten';
            
//         }
//         console.log(mas[i]);
//     }

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let space = [];

// for (i = 0; i <= 100; i++){
//     if(i % 2 === 0 && i !== 0){
//         space.push(i);
//     }
// }

// console.log(space);

// for (i = 0; i <= 100; i++){
//     if(i % 2 !== 0 && i !== 0){
//         space.push(i);
//     }
// }

// console.log(space);

// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
 //    b. заповнити його 50 непарними числами за допомоги циклу.
// ВЖЕ Є
 
    //    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let space = [];

// for (i = 0; i < 20; i++){
//     space.push(Math.random() * 100);
// }

// console.log(space);

    //    d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
//     }

// let spaceX = [];

// for (i = 0; i < 20; i++){
//     spaceX.push(getRandomIntInclusive(8, 732));
// }

// console.log(spaceX);

// 2. Вивести за допомогою console.log кожен третій елемен

// for (i = 0; i <= spaceX.length; i++){
//     if (i % 3 === 0){
//         console.log(spaceX[i]);
//     }
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (i = 0; i <= spaceX.length; i++){
//     if (i % 3 === 0 && spaceX[i] % 2 === 0){
//         console.log(spaceX[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let blueOrigin = [];

// for (i = 0; i <= spaceX.length; i++){
//     if (i % 3 === 0 && spaceX[i] % 2 === 0){
//         blueOrigin.push(spaceX[i]);
//     }
// }

// console.log(blueOrigin);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним

// for (i = 0; i <= spaceX.length; i++){
//         if (spaceX[i +1] % 2 === 0){
//             console.log(spaceX[i]);
//         }
//     }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array = [100,250,50,168,120,345,188];

// let sum = 0

// for (var i = 0; i < array.length; sum += array[i++]);

// let mediana = sum / array.length;

// console.log(mediana);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let imTired = [];

// for (i = 0; i < 20; i++){
//     imTired.push(getRandomIntInclusive(5, 55));
// }

// console.log(imTired);

// let letsGO = [];

// for (let x of imTired){
//     letsGO.push(x * 5);
// }

// console.log(letsGO);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let fatality = [22, 'string', true, 234, 'string',  false, 4245, 'string', true, 664, 'string', false, 3, 'string', true];

// let mc = [];

// for (let fat of fatality){
//     if (typeof(fat) === 'number'){
//         mc.push(fat);
//     }
// }

// console.log(mc);