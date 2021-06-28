// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User (id, name, surmane, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surmane = surmane;
//     this.email = email;
//     this.phone = phone;
// }

// let users = [
//     new User (1, 'Yuliy', 'Cezar', 'yuliy.salatik@spqr.com' ,067-850-90-90),
//     new User (2, 'Monkey', 'D. Luffy','pirateking@gmail.com', 093-551-11-00),
//     new User (3, 'Buggi', 'Man', 'buggiwuggi@ukr.net', 067-345-23-64),
//     new User (4, 'Andre', 'The Giant', 'BIGA@gmail.com', 098-980-98-98),
//     new User (5, 'Simba', 'Lion', 'prettykitty@yahoo.com', 093-752-75-00),
//     new User (6, 'Piter', 'Parket', 'ImNotSpiderman@gmail.com', 067-346-76-88),
//     new User (7, 'Oleg', 'Satana', 'moskovskyipatriarkhat@yandex.com', 095-666-66-60),
//     new User (8, 'Old', 'Man', 'toyoungforya@yahoo.com', 093-210-22-22),
//     new User (9, 'Petro', 'Poroshenko', '5-th.president@yandex.com', 063-354-75-29),
//     new User (10, 'Przhervalskii', 'Horse', 'wild.creature@gmail.com', 093-488-95-21)
// ];

// console.log(users);

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor (id, name, surmane, email, phone, order){
//         this.id = id;
//         this.name = name;
//         this.surmane = surmane;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let clients = [
//     new Client (1, 'Yuliy', 'Cezar', 'yuliy.salatik@spqr.com' ,067-850-90-90, ['trebushe']),
//     new Client (2, 'Monkey', 'D. Luffy','pirateking@gmail.com', 093-551-11-00, ['meet', 'ship']),
//     new Client (3, 'Buggi', 'Man', 'buggiwuggi@ukr.net', 067-345-23-64, ['song']),
//     new Client (4, 'Andre', 'The Giant', 'BIGA@gmail.com', 098-980-98-98, ['title', 'figth', 'big shoes']),
//     new Client (5, 'Simba', 'Lion', 'prettykitty@yahoo.com', 093-752-75-00, ['father wisdom', 'insects']),
//     new Client (6, 'Piter', 'Parket', 'ImNotSpiderman@gmail.com', 067-346-76-88, ['trico', 'net', 'Spidermans fotos']),
//     new Client (7, 'Oleg', 'Satana', 'moskovskyipatriarkhat@yandex.com', 095-666-66-60, ['fork']),
//     new Client (8, 'Old', 'Man', 'toyoungforya@yahoo.com', 093-210-22-22, ['iphone', 'simple-dimple', 'fanta shokata', 'nike']),
//     new Client (9, 'Petro', 'Poroshenko', '5-th.president@yandex.com', 063-354-75-29, ['candies', 'pipe', 'zrada']),
//     new Client (10, 'Przhervalskii', 'Horse', 'wild.creature@gmail.com', 093-488-95-21, ['grass'])
// ];

// console.log(clients);

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car (model, producer, year, maxSpeed, engineV){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineV = engineV;

//     Car.prototype.drive = function () {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }

//     Car.prototype.info = function () {
//         return Object.values(this)
//     }

//     Car.prototype.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         return this.maxSpeed
//     }

//     Car.prototype.changeYear = function (newValue) {
//         this.year = newValue;
//         return this.year
//     }

//     Car.prototype.driver = function (driver) {
//         this.driver = driver;
//     }
// }

// let mitsubishi = new Car ('galant', 'Mitsubishi', 2007, 200, 2.4)

// console.log(mitsubishi);

// let attention = mitsubishi.drive();

// console.log(attention);

// let aboutCar = mitsubishi.info();

// console.log(aboutCar);

// let speed = mitsubishi.increaseMaxSpeed(50);

// console.info(speed);

// let newYear = mitsubishi.changeYear(2009);

// console.log(newYear);

// let vasia = {
//     name: 'Vasia',
//     age: 34,
//     licensed: true
// }

// let onBoard = mitsubishi.driver (vasia);

// console.log(mitsubishi);

// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor (model, producer, year, maxSpeed, engineV){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineV = engineV;
//     }

//     drive () {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }

//     info () {
//         return Object.values(this)
//     }

//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         return this.maxSpeed
//     }

//     changeYear (newValue) {
//         this.year = newValue;
//         return this.year
//     }

//     driver (driver) {
//         this.driver = driver;
//     }

// }

// let mitsubishi = new Car ('galant', 'Mitsubishi', 2007, 200, 2.4)

// console.log(mitsubishi);

// let attention = mitsubishi.drive();

// console.log(attention);

// let aboutCar = mitsubishi.info();

// console.log(aboutCar);

// let speed = mitsubishi.increaseMaxSpeed(50);

// console.info(speed);

// let newYear = mitsubishi.changeYear(2009);

// console.log(newYear);

// let vasia = {
//     name: 'Vasia',
//     age: 34,
//     licensed: true
// }

// let onBoard = mitsubishi.driver (vasia);

// console.log(mitsubishi);

// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню

// let filter = users.filter(user => user.id % 2 === 0);
// console.log(filter);

// let sortUp = users.sort ((user1, user2) => user1.id - user2.id);
// console.log(sortUp);

// let sortDown = users.sort ((x, y) => y.id - x.id);
// console.log(sortDown);

// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню

// let orderRange = clients.sort(function(cl1, cl2){
//     return cl2.order.length - cl1.order.length
// })

// console.log(orderRange);

// ====================================================================================
// CLASSWORK

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// let cinderellas = [
//     new Cinderella ('aaa', 20, 34),
//     new Cinderella ('bbb', 21, 35),
//     new Cinderella ('ccc', 22, 36),
//     new Cinderella ('ddd', 23, 37),
//     new Cinderella ('eee', 24, 38),
//     new Cinderella ('fff', 25, 39),
//     new Cinderella ('ggg', 26, 40),
//     new Cinderella ('hhh', 27, 41),
//     new Cinderella ('iii', 28, 42),
//     new Cinderella ('jjj', 29, 43)
// ]

// class Prince {
//     constructor(name, age, shoesSize){
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }

// }

// let youngMan = new Prince ('EEE', 24, 38);

// for (let win of cinderellas){
//     if(win.footSize === youngMan.shoesSize){
//         console.log(`You have a match with ${win.name}`)
//         break
//     }
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// class Cinderella {
//     constructor(name, age, footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// let cinderellas = [
//     new Cinderella ('aaa', 20, 34),
//     new Cinderella ('bbb', 21, 35),
//     new Cinderella ('ccc', 22, 36),
//     new Cinderella ('ddd', 23, 37),
//     new Cinderella ('eee', 24, 38),
//     new Cinderella ('fff', 25, 39),
//     new Cinderella ('ggg', 26, 40),
//     new Cinderella ('hhh', 27, 41),
//     new Cinderella ('iii', 28, 42),
//     new Cinderella ('jjj', 29, 43)
// ]

// class Prince {
//     constructor(name, age, shoesSize){
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }

//     findYourLadi = (arr) => arr.find(value => value.footSize === this.shoesSize);

// }

// let youngMan = new Prince ('EEE', 24, 38);

// let match = youngMan.findYourLadi(cinderellas);
// console.log(match);

// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

// class Teg {
//     constructor(titleOfTag, action, attrs){
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }

// class Attrs {
//     constructor(titleOfAttr, actionOfAttr){
//         this.titleOfAttr = titleOfAttr;
//         this.actionOfAttr = actionOfAttr;    
//     }
// }

// let a = new Teg ('<a>', 'является одним из важных элементов HTML и предназначен для создания ссылок', [new Attrs('href', 'Задает адрес документа, на который следует перейти'), new Attrs('name', 'Устанавливает имя якоря внутри документа.')])

// console.log(a);