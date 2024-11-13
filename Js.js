// document.getElementById("myh1").textContent = `Hello`;
// document.getElementById("para1").textContent = "I like Pizza!"

// let age = 16;
// let price = 10.99;
// let gpa = 4.90;

// console.log(`You are ${age} years old`);
// console.log(`The price of the item is $${price}`);
// console.log(`Amanze Bruno's GPA is ${gpa}`)

// let online = true;
// console.log(typeof online)

// let username;
// username = prompt("What is your name");
// console.log(username);

// let userName3;

// document.getElementById("submit").onclick = function(){
//    userName3 = document.getElementById("user").value
//    document.getElementById("usernameInput").textContent = `Hello ${userName3}`
// }

// let age2 = Number(prompt("What is your Age: "));

// age += 1;
// console.log(age, typeof age);

const PI = 3.14159;
// let userValue;
// let circumference;

// userValue = prompt("Enter A Value: ");
// console.log(userValue);
// userValue = Number(userValue);

// circumference = 2 * PI * userValue;
// console.log(circumference);

//Calculating the circumference of a circle
document.getElementById("submitRadius").onclick = function(){
    let userVal = document.getElementById("user_input").value;
    circumference = 2 * PI * userVal;
    document.getElementById("displaytext").textContent = `The Circumference of the given radius is: ${circumference}cm`;
}

//Counter Program
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");

let counters = 0
increaseBtn.onclick = function(){
    counters++;
    counter.textContent = counters;
}

decreaseBtn.onclick = function(){
    counters--;
    counter.textContent = counters;
}

resetBtn.onclick = function(){
    counters = 0;
    counter.textContent = counters;
}

//checked property
const myCheckBox = document.getElementById("myCheckBox");
const visacardBtn = document.getElementById("visacardBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const sub = document.getElementById("sub");
const paymentresult = document.getElementById("paymentresult");

document.getElementById("displaychosen").onclick = function(){
    if(myCheckBox.checked){
        sub.textContent = `You have Subscribed`;
    }
    else{
        sub.textContent = `You have not subscribed`;
    }

    if(visacardBtn.checked){
        paymentresult.textContent = "You are paying with visa card";
    }
    else if(mastercardBtn.checked){
        paymentresult.textContent = "You are paying with Master Card";
    }
    else if(paypalBtn.checked){
        paymentresult.textContent = "You are paying with Pay Pal";
    }
    else{
        paymentresult.textContent = "You must choose a payment option";
    }
}

// let userName = prompt("What is your Name");
// let nameValue = userName.trim();

// let letter = nameValue.charAt(0);
// capitalize = letter.toUpperCase();

// get_value = (nameValue.slice(1)).toLowerCase();

// let userName2 = capitalize + get_value
// console.log(userName2)


//Generate Random Values
const rollRand = document.getElementById("rollRand");
const rand1 = document.getElementById("rand1");
const rand2 = document.getElementById("rand2");
const rand3 = document.getElementById("rand3");


const min = 1;
const max = 6;

rollRand.onclick = function(){
    val1 = Math.floor(Math.random() * max) + min;
    val2 = Math.floor(Math.random() * max) + min;
    val3 = Math.floor(Math.random() * max) + min;
    rand1.textContent = val1;
    rand2.textContent = val2;
    rand3.textContent = val3;
}

//Check Matric Number Of student and tell their level
matric = document.getElementById("matric");
checkStudent = document.getElementById("checkStudent");
displayLevel = document.getElementById("displayLevel");

matric.onclick = function(){
    const getStudentInfo = checkStudent.value;
    let new_value = getStudentInfo.slice(0, 2);
    
    console.log(new_value);
    operation = 24 - new_value;
    if(getStudentInfo.length > 10){
        displayLevel.textContent = `Your Matric Number can't be more than 10 characters`;
    }
    else if (operation > 5){
        displayLevel.textContent = "What are you still doing in covenant???? leave my boy😢";
    }
    else if(operation == 0){
        displayLevel.textContent = "You are in 100 Level";
    }
    else if(getStudentInfo.length <= 10){
        displayLevel.textContent = `You are a in` + " " + (operation) + "00" + " " + "Level";
    }
    
}

// let user_name = "";

// while(user_name === "" || user_name === null){
//     user_name = prompt("Enter Your Name");
//     console.log(user_name);
// }

//For Loop
// for(let x = 1; x <= 20; x ++){
//     console.log(x);
// }



//Working with Functions
// function happyBirthday(name){
//     console.log(`Happy BirthDay ${name}`)
// }

// happyBirthday("Rizz god");

// function add(x, y){
//     let value = x + y;
//     return value;
// }

// add(4, 5);

const user_tempInput = document.getElementById("user_tempInput");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");

function convert(){
    temp = Number(user_tempInput.value);
    if(celsius.checked){
        result.textContent = temp * 9/5 + 32;
    }
    else if(fahrenheit.checked){
        result.textContent = (temp - 32) * (5/9);
    }
    else{
        result.textContent = `Please select a unit`
    }
}

// let minNum = 1;
// let maxNum = 100;

// answer = Math.floor(Math.random() * (maxNum -minNum + 1)) + minNum;
// console.log(answer);

// guess_count = 0;
// guess_limit = 5;

// while(guess_count < guess_limit){
//     user = prompt("Enter Your Guess");
//     user = Number(user);

//     if(user === answer){
//         guess_count += 1;
//         console.log("congratulations, you got the guess right");
//         break;
//     }
//     else{
//         guess_count += 1;
//         console.log("Oops, Try Again");
//     }
// }

//spread and ...rest parameters


//spread operator
let scores = [335, 240, 340, 359, 360];
scores = Math.min(...scores);
console.log(scores);


//rest parameters
function myFunc(...values){
    console.log(values)
}

let name1 = "Tunde";
let name2 = "Bola";
let name3 = "Sola";
let name4 = "Amanze";

myFunc(name1, name2, name3,name4);

function sumUp(...numbers){
    let sum = 0;
    for (number of numbers){
        sum += number;
    }
    return sum;
}


let summation = sumUp(1, 2, 3, 4, 5, 6);
console.log(summation);

function combineStrings(...strings){
    return strings.join(" ");
}

let fullName = combineStrings("Mr.", "SpongeBob", "Square Pants", "III");
console.log(fullName);

function diceRoller(){
    const numberOfRoll = document.getElementById("numberOfRoll").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");
    const rollValue = [];
    const images = [];
    for(let i = 0; i < numberOfRoll; i++){
        const rand4 = Math.floor(Math.random() *6) + 1;
        rollValue.push(rand4);
        images.push(`<img src = images/${rand4}.jpeg>`)
    }

    diceResult.textContent = `Result: ${rollValue.join(", ")}`;
    diceImg.innerHTML = `${images.join(" ")}`;
}

//Generate random Passwords
function generatePassword(characterLength, includeSpecialSymbols, includeCapitalLetter, includeSmallCaps){
    const lowerChars = "abcdefghijklmnopqrstuvwwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "£$%^&!*_+%^\|/`!''#][()/<>-{}"
    const numbers = "0123456789";

    let allowedChars = "";
    let password = "";

    includeCapitalLetter ?  allowedChars += upperChars :  allowedChars+="";
    includeSpecialSymbols ? allowedChars += specialChars :  allowedChars+="";
    includeSmallCaps ? allowedChars += lowerChars : allowedChars+="";
    includeNumbers ? allowedChars += numbers :  allowedChars+="";
    
    if(characterLength <= 0){
        console.log("Password Must be atleast 1 character long");
    }
    else if(allowedChars === 0){
        console.log("Atleast 1 set of characters needs to be selected");
    }

    for(let i = 0; i < characterLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password+=allowedChars[randomIndex];
    }
    return password;
}


const characterLength = 20;
const includeSpecialSymbols = true;
const includeCapitalLetter = false;
const includeSmallCaps = true;
const includeNumbers = true;



const passwords = generatePassword(characterLength,
                                    includeSpecialSymbols,
                                    includeCapitalLetter,
                                    includeSmallCaps,
                                    includeNumbers);

console.log(passwords);


//Callback functions

function sum(callBack, x, y){
    let result = x + y;
    callBack(result);
}

function displayResult(result){
    console.log(result)
}
sum(displayResult, 4, 7);

let ourValue = ["orange", "banana", "mango", "pear"];

ourValue.forEach(upperChar);
ourValue.forEach(display)
function double(element, index,  array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}

function upperChar(element, index, array){
    array[index]  = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}


// .map() method
// let's a code to square each element of an array using .map() method, then the result would automatically be added to an array

let integers =  [1, 2, 3, 4, 5, 6, 7];
let newArray = integers.map(square);
console.log(newArray);

function square(x, y, z){
    let rPow = z[y] = Math.pow(x, 2)
    return rPow;
}

// We want to make all strings in an array uppercase using .map() method.

const students = ["Ezekiel", "Michael", "Jeremiah", "Jude", "Zuckerberg"];

let w = students.map(studentUpper);
console.log(w);
function studentUpper(names){
    return names.toUpperCase();
}

const dates = ["2024-03-16", "2025-01-25", "2027-09-27", "2028-01-28"];
const reversed = dates.map(dateReverse);
console.log(reversed);
function dateReverse(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}}`
}


//.filter() method

const filterOut = [1, 2, 3, 4, 5, 6, 7, 8,];
const filterOuti = filterOut.filter(even);
console.log(filterOuti);

function even(element){
    return element % 2 === 0;
}

//function expression

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const squareArrayNumber = arrayNumbers.map(function(element){
    return Math.pow(element, 2);
})

const evenNums = arrayNumbers.filter(function(element){
    return element % 2 === 0;
})
console.log(squareArrayNumber);
console.log(evenNums);

// arrow functions  (parameters) => some code.

const object = (name) => console.log(`Hello ${name}`)

object("Amica");

arrowNums = [2, 3, 4, 5, 6, 7, 8, 9];
const element$ = arrowNums.map( (element) => Math.pow(element, 2));
const arrowTracker = arrowNums.filter( (element) => element % 2 === 0);
const total = arrowNums.reduce((accumulator, element) => accumulator + element)

console.log(arrowTracker);
console.log(element$);

//Objects in JavaScript

const person = {
    firstName: "John",
    lastName: "Ducker",
    age: 25,
    isStaff: true,
    sayHello: () => console.log("Hello")
}

console.log(person.isStaff);
console.log(person.firstName);
console.log(person.age);
console.log(person.lastName);
person.sayHello();

const person2 = {
    firstName: "John",
    lastName: "Ducker",
    age: 25,
    isStaff: true,
    sayName: function(){console.log(`Hi I am ${this.name}`)}
}

person2.sayName();

//Constructors

function Product(name, price){
    this.name = name,
    this.price = price,

    this.displayProduct = function(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`)
    }

    this.calculateTotal = function(){
        console.log(`(Total Price with Tax included): $${this.price + (this.price * 0.05)}`);
    }
}

const product1 = new Product("Shirts", 19.99);

product1.displayProduct();
product1.calculateTotal();

//Class keyword in JAVASCRIPT
//Let's use a class keyword to create the previous code we just did

class Product2{
    constructor(name, price){
        this.name = name,
        this.price = price
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`)
    }

    calculateTotal(){
        console.log(`(Total Price with Tax included): $${this.price + (this.price * 0.45)}`);
    }
}

const product2 = new Product2("Ball", 1.29);
const product3 = new Product2("Phone", 500)

product2.displayProduct();
product3.displayProduct();

product3.calculateTotal();

//Static keyword

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2
    }

    static getCircumference(radius){
        return 2 * this.PI * radius
    }
}

console.log(MathUtil.getDiameter(45))
console.log(MathUtil.getCircumference(24));

class User{

    static usercount = 0;

    constructor(user){
        this.name = user;
        User.usercount++
    }

    static getUserCount(){
        console.log(`There are ${User.usercount} user(s) online`)
    }
}

const username_s = new User("Amani");
const user2 = new User("Josh");

console.log(user2.name);
console.log(username_s.name);
User.getUserCount();

//Inheritance

class Animals{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
}

class Rabbit extends Animals{
    name = "Rabbit";
}

const newAnimal = new Rabbit();

console.log(newAnimal.alive);

newAnimal.eat();

//super keyword in JavaSciript

class flyAnimal{

    constructor(weight, color){
        this.weight = weight,
        this.color = color,
        console.log(`The Animal's weight is ${weight}kg and ${color} in color`);
    }
}

class Hawk extends flyAnimal{
    constructor(weight, color){
        super(weight, color);
    }
}

const hawk = new Hawk(23, "black");
console.log(hawk.weight);
console.log(hawk.color);

//setter and getter

//settter

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width Must be a postive number")
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height Must be a positive Number")
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}

const rect = new Rectangle(4, 5);
console.log(rect.width);
console.log(rect.height);

class UserInfo{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First Name must be a non-empty string")
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("LastName Name must be a non-empty string")
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }
}

const userX = new UserInfo("John", "Doe");
console.log(userX.firstName);
console.log(userX.lastName);

// destructuring in JAVASCRIPT

// --------------EXAMPLE 1-----------------
// SWAP THE VALUES OF TWO VARIABLES
let a = 1;
let b = 2;

[a, b] = [b, a]
console.log(a);
console.log(b);

// ----------------EXAMPLE 2----------------
// SWAPPING TWO VALUES IN AN ARRAY.

let color = ["Yellow", "Green", "Blue", "White"];
[color[0], color[3]]  = [color[3], color[0]]
console.log(color);

//-------------- EXAMPLE 3-----------------
// ASSIGNING ARRAYS TO VARIABLES

const colours = ["Pink", "Violet", "Grey", "darkBlue"];
const [firstColour, secondColor, thirdColour, ...extraColours] = colours;

console.log(firstColour);
console.log(extraColours);

//---------------EXAMPLE 4-------------------
// EXTRACTING VAUES FROM OBJECT
const object1 = {
    property: "House",
    colors: "Orange",
    height: 20,
}

const {property, colors, height} = object1;
console.log(property);

//DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({firstName, lastName, age}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`You are ${age} years old`);
}

const new_user = {
    firstName : "Bruno", 
    lastName : "Amanze", 
    age : 25
}

displayPerson(new_user);

//Nested Objects

const human  = {
    fullName: "Mr. Amani Roberts",
    age: 30,
    isStudent : false,
    hobbies : ["Karate", "JellyFishing", "Football"],
    address : {
        state : "Lagos State",
        street : "5/7 Ajibodu Street, Karaole Estate",
        country: "Nigeria"
    }
}

console.log(human.address.state);
console.log(human.address.street);
console.log(human.address.country);

for(const properties in human.address){
    console.log(human.address[properties]);
}


//Array of Objects
const arrayObjects = [{name : "John", Age : 25, skinColor: "black"},
                      {name : "Isaac", Age : 32, skinColor: "fair"},
                      {name : "Genesis", Age : 57, skinColor: "chocolate"}]

arrayObjects.forEach((element) => console.log(element.name));

const mapObjects = arrayObjects.map((element) => element.name);
const youngAge = arrayObjects.filter(element => element.Age < 50)

const maxFruit = arrayObjects.reduce((max, element) => element.Age > max.Age ? element : Age)

console.log(maxFruit);

// DATE OBJECTS IN JAVASCRIPT

const date = new Date("2024-03-21T12:00:00Z")
const month = new Date()

console.log(month.getMonth())

// Closure Property in JAVASCRIPT

function outer(){
    let message = "I am a message"
    function inner(){
        console.log(message)
    }
    inner();
}

outer();

function game(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`)
    }

    function decreaseScore(points){
        score -= points
        console.log(`-${points}pts`)
    }

    function getScore(){
      return score;
    }
    return {increaseScore, decreaseScore, getScore};
}

const game2 = game();

game2.increaseScore(19);
game2.decreaseScore(4);

console.log(`Your final score is: ${game2.getScore()}`);

//setTimeOut(callback, delay)

const timeoutId = setTimeout(() => {
    alert("Hello User")
}, 3000);

clearTimeout(timeoutId);

//ERROR HANDLING
// try{
//     const dividend = Number(prompt("Enter a dividend:"));
//     const divisor = Number(prompt("Enter a divisor"));
    
//     if(divisor === 0){
//         throw new Error("You can't divide by zero")
//     }

//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values must be a number");
//     }

//         const result2 = dividend/divisor;
//         console.log(result2);
// }

// catch(error){
//     console.error(error)
// }

// document.body.style.backgroundColor = "hsl(0, 0%, 15%)"

const bodyContext = document.getElementById("toggleLightMode");
const checkbox3 = document.getElementById("checkbox");
// checkbox3.checked = false;

function checkBox(){
    document.body.style.backgroundColor = "hsl(0, 0%, 15%)"
    document.body.style.color = "white"

    if(bodyContext.checked){
        bodyContext.checked = false;
    }

    checkbox3.checked = true
}

function toggleLight(){
    if(bodyContext.checked){
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";
    }
    if(checkbox3.checked){
        checkbox3.checked = false;
    }
    bodyContext.checked = true;
}

//Working with Element Selectors
const selectOptions = document.getElementsByClassName("fruits");

// selectOptions[0].style.backgroundColor = "yellow"

Array.from(selectOptions).forEach( element => {
                                    element.style.fontSize = "25px";
})

//Query selectors selects only the first element of a group of class name or id

const getHeadings = document.querySelector(".select");

getHeadings.style.backgroundColor = "blue";


//.querySelectorAll() selects a node list, A node list is similar to a HTML collection

const arraySelector = document.querySelectorAll(".select");

arraySelector[2].style.backgroundColor = "pink";

//DOM Navigation: The process of navigating through the structure of a HTML document using javascript

//-------Accessing the first child element of a HTML document--------
const parentElement = document.querySelectorAll("ul");

console.log(parentElement)

parentElement.forEach( element => {
                    element.firstElementChild.style.backgroundColor = "darkred";
})

//we also have the following DOM navigation programs
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//8:47:36
//ADDING AND CHANGING ELEMENTS IN HTML USING JAVASCRIPT

// 1. CREATING THE ELEMENT
const newH1 = document.createElement("h1");
newH1.id = "myH1";
// 2. ADD ATTRIBUTES/PROPERTIES

newH1.textContent = "This is Good";

// 3. APPEND ELEMENT TO THE DOM

document.body.append(newH1);

document.getElementById("box2").prepend("Hello, This is a prepend property");
const box2 = document.getElementById("box2");
//We have the insert before method
document.body.insertBefore(newH1, box2);
// 4. REMOVE THE HTML ELEMENT
//we use the .removeChild() method to remove a HTML content in the web browser.

//Event Listeners in Javascript
//We have click events, mouseover events and we have mouseover events ---.addEventListener(event, callback)

const getBox = document.getElementById("clickBox");

getBox.addEventListener("click", (e) => {
                       e.target.style.backgroundColor = "tomato";
                       e.target.textContent = "OUCH! 🤕";
})

getBox.addEventListener("mouseover", e => {
    e.target.style.rotate = "5deg";
    e.target.textContent = "Don't do it 😥";
    e.target.style.backgroundColor = "blue";
})

getBox.addEventListener("mouseout", e => {
    e.target.style.rotate = "0deg";
    e.target.style.backgroundColor = "lightgreen";
    e.target.textContent = "Click Me 😀";
})


//KEY EVENTS IN JAVASCRIPT
//In key events we have keywords like keydown, keyup
//.addEventListener("keydown", callback)

// document.addEventListener("keydown", element => {
//         console.log(`Key Down: ${element.key}`);
// })

// document.addEventListener("keyup", element => {
//     console.log(`Key up: ${element.key}`);
// })


const clickBox2 = document.getElementById("clickBox2");

const moveAmount = 10;

let y = 0;
let x = 0;

document.addEventListener("keydown", e => {

    if(e.key.startsWith("Arrow")){
        
        e.preventDefault();

        switch(e.key){
            
            case "ArrowUp":
                 y -= moveAmount;
                 break;

            case "ArrowDown":
                y += moveAmount;
                break;
            
            case "ArrowLeft":
                x -= moveAmount;
                break;
            
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        clickBox2.style.top = `${y}px`;
        clickBox2.style.left = `${x}px`;
    }
})


//Node List, A node list is a static collection of HTML element
// add()
//remove()
//toggle()
//replace(oldClass, newClass)
//contains()
//9:45:39

const button = document.getElementById("classList");

//This would add a class to the HTML document
button.classList.add("enabled");
//This would remove the class from the HMTL doucument
button.classList.remove("enabled");

//Promise is an object that manages asychronous operations
