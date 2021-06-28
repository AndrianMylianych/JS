// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let team = document.getElementById('main_header');

// team.innerText = 'april-2021';

// //     b) робить шириниу елементу ul 400px

// let ulElements = document.getElementsByTagName('ul');

// for (let ulElement of ulElements){
//     ulElement.style.width = '400px';
// }

// //     c) робить шириниу всіх елементів з класом linkList шириною 50%

// let links = document.getElementsByClassName('linkList');

// for (let link of links){
//     link.style.width = '50%';
// }

// //     d) отримує текст який зберігається в елементі з класом listElement2

// let linkTwo = document.getElementsByClassName('listElement2');
// for (let link of linkTwo){
//     console.log(link);
// }

// //     e) отримує всі елементи li та змінює ім колір фону на сірий

// let li = document.getElementsByTagName('li');

// for (let l of li){
//     l.style.backgroundColor = 'grey';
// }

// //     f) отримує всі елементи 'a' та додає їм клас anchor

// let anchor = document.getElementsByTagName('a');

// for (let a of anchor){
//     a.classList.add('anchor');
// }

// //     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// for (let a of anchor){
//     if(a.innerText === 'link3'){
//         a.style.fontSize = '40px';
//     }
// }
// //     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// for (let a of anchor){
//     a.classList.add(`element_${a.innerText}`);
// }

// //     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHead = document.getElementsByClassName('sub-header'); 

// let back = prompt('color');

// for (let sub of subHead){
//     sub.style.backgroundColor = `${back}`
// }

// //     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let textColor = prompt('text color');

// for (let sub of subHead){
//     if(sub.innerText === 'content 2 segment'){
//         sub.style.color = `${textColor}`;
//     }
// }
// //     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let yourText = prompt('your text');

// let contentFirst = document.getElementsByClassName('content_1');

// for (let content of contentFirst){
//     content.innerText = `${yourText}`;
// }

// //     l) отримати елементи p та змінити їм padding на 20px

// let p = document.getElementsByTagName('p');

// for (let i of p){
//     i.style.padding = '20px';
// }

// //     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// let noTextTwo = document.getElementsByClassName('text2');

// for (let text of noTextTwo){
//     text.innerText = 'april-2021';
}

// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div