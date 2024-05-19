//Javascript Fundamentals
// Using of console
// Uses of REPL
// REPL ---> Read -->Evaluate(Compute calculations) -->Print --> Loop
// Note you can't save the file in console and the code is not permanent
//Use ctrl +L to clear the window

// Chapter-1 **Variables**
// What is a variable ?
// A variable is simply of a storage location.
//eg: age = 20

// Datatypes in javascript
//Primtive Types - basic
//Number,Boolean,String,Undefined,Nullv(Main), Bigint,Symbol--(not freqently used)
//Numbers in javascript
// *Positive a=& negative
// *Integers
// *floating Numbers  -with decimal
//Operations in Javscript
//additon , multiplication ,division , subtraction , remainder(Modulo), exponentiation(power operator)
//modulo operator is used to detect odd and even numbers in JS
// odd numbers gives us a modulo val
// even numbers gvies us a 0
// double aesterics is used for power i.e 6**2 = 36
//NaN in Js -->  the NAN global property is a value representing Not-A-Number

// operator Precendence(Priority)read/ claculate from left to right
//this is the genral  order of solving an Expression
// BODMAS rule -- ()
//                 **
//                 *,/,%
//                 +-
// eg1 --> (5+2)/7 +1 *2
// 7/7 +1*2
// 1+2 = 3 ans
// eg2 -->(2+1)*3
// 9
// eg-2 3/1+2**2
// 3+4 = 7
// 4+1*6/2
// 6/2 = 3 +4
// 7

//Identifier Rules
// All js variables must be identifeid with unique names
// * Names can contain letters,digits,underscores, and dollar signs.(no space)
// * Names must begin with a letter;
// Names can also begin with $ and _;
// Names are case sensitive(y an Y are different variables)
// Reserved words(Like Javascript keyboard) CANNOT be used as names;
//camelCase
// way of writing identifiers
// camelCase(JS naming convention)
// snake_case --python naming convention
// PascalCase

//what is Typescript?
// Static typed, whre JS is dynamic typed
// designed by Microsoft
// in js variables type can be changed  (Dynamic) wherein in typescript it's a strict langauge.

// String in Javascript
// String are text or sequence of characters
// written in the form of " " or ' '

//Null & undefined in JS
// undefined ---> A variable that has not been assigned a value is of type undefined
// type undefined
// Null --> The null value represents the intentional absence of any object value;
// to be explicitly assigned;

//Javascript Part -2

//Template Literals
//They are used to add embedded expression in a string
//example
// let pencil = 9;
// let scale = 10;
// //let output = "The total Price is :" + (pencil + scale) + "rupees";
// let output = `the toal price is : ${pencil} rupess`; //backticks (Template literals)
// console.log(output);

//Conditonal Statements
// *if-else
// *nested if-else
// *switch

// if Statement
// if(condtion){
//     //some code
// }
//Example  : console.log("trafix signals detection ");
// let color = "yellow";
// if (color === "red") {
//   console.log("stop for a moment");
// }
// if (color === "green") {
//   console.log("Go ahead ");
// }
// if (color === "yellow") {
//   console.log("be ready");
// }

//else-if Statement
//syntax
// let age = 23;
// if (age <= 20) {
//   console.log("you cant vote");
// } else if (age === 18) {
//   console.log("you're eligible to vote");
// } else if (age >= 18) {
//   console.log("you can vote independently");
// }

//Else statements
//Syntax
// let applePrice = 100;
// if (applePrice < 500) {
//   console.log("apples are affordable");
// } else {
//   console.log("apples are expensive");
// }

//Practise Question
// let size = "XL";
// if (size === "XL") {
//   console.log("popcorn price is 250");
// } else if (size === "L") {
//   console.log("Prize is 200");
// } else if (size == "M") {
//   console.log("prize is 100");
// } else if (size == "S") {
//   console.log("prize is 50");
// }
//output : popcorn price is  250

// Nested if else statements
//  Nesting is writing if-else inside if-else statements .if can have many levels
//Syntax
//   if marks >= 33
//    if marks >= 80
//    console.log( "O")
//    else {
//      console.log("A");
//    }
//    else {
//     console.log("better luck next time");
//    }

//Alerts and Promts
// Alert --> displays an alert message on the page.
// alert("something went wrong");
// Prompt --> displays a dailog box that asks user for some input.
// prompt("please enter your roll no");
// alert("something went wrong");
// let name = prompt("Name required");
// console.log(name);
// prompt("Name required");
// console.error("unexpected token");
// console.warn("unexpected token");
//Example
// let firstName = prompt("enter  your first name");
// let lastName = prompt("enter your last name");
// let msg = firstName + " " + lastName;
// alert(msg);

//Practice Question1
// let num = 50;
// if (num / 10) {
//   console.log("good");
// } else {
//   console.log("bad");
// }
// //Practice Question2
// let name = prompt("enter your Name");
// let age = prompt("enter your age");
// let msg = alert(name + " " + age + " " + "years old");
// console.log(msg);

//Program to find largest of three numbers (3)

// let num1 = 45;
// let num2 = 66;
// let num3 = 80;
// if (num1 > num2) {
//     if (num1 > num3) {
//       console.log(num1, " : is largest");
//     } else {
//       console.log(num3, " : is largest ");
//     }
//   } else {
//     if (num2 > num3) {
//       console.log(num2, "is largest");
//     } else {
//       console.log(num3, "is largest");
//     }
//   }

//String Methods
//Methods --> actions that can be performed on objects are called Methods
// format
// StringName.method()
// //Trim Method
// Trims whitespace from both the ends of string &returns a new one
//Note **  strings in javascipt are immutable ,once a string is created, its contents cannot be changed.
// String Arguments
//indexOf
// Returns the first index of occurence of some value in string .Or gives -1 if not found;
// let str = "ILoveCoding";
// str.indexOf("Love");   //1
// str.indexOf("J");   //not found -1
// str.indexOf("o");  //2 (only 1 index)
//let str = "ILoveCoding";
// str.indexOf("K");
// -1
// str.indexOf("C");
// 5
//Method Chaining
//Using one method after another. .Order of execution will be left to right.

//Arrays are mutable unlike strings
//Push : add to end
//Unshift : add to start
//Pop : delete from end & returns it.
//shift:delete from start & returns it.
// let students = ["aman", "sabah", "arsh"];
// console.log(students);

//Array Methods

//indeOf Method--> returns index
//includes---> returns true or false i:e value exits or not
//concat --> merge 2 arrays
//reverse--> reverse an arrays
// let cars = ["audi","honda city","mercedesbenz","porche"]
// undefined
// let fruits = ["apple","kiwi","mango","orange"];
// undefined
// cars.concat(fruits);
// (8) ['audi', 'honda city', 'mercedesbenz', 'porche', 'apple', 'kiwi', 'mango', 'orange']0: "audi"1: "honda city"2: "mercedesbenz"3: "porche"4: "apple"5: "kiwi"6: "mango"7: "orange"length: 8[[Prototype]]: Array(0)
// cars.reverse(fruits);
// (4) ['porche', 'mercedesbenz', 'honda city', 'audi']0: "porche"1: "mercedesbenz"2: "honda city"3: "audi"length: 4[[Prototype]]: Array(0)
//slice : copies a portion of an array
// fruits.slice(2);
// (2) ['mango', 'orange']
// 0
// :
// "mango"
// 1
// :
// "orange"
// length
// :
// 2
//Splice Methods
// splice:removes/replaces/add elements in place of splice
//splice(start,deleteCount,item....itemN)
//sort();---> sorts an array

//Array References(address in memory)
//Array references stores the address of the array and not the value
//lets say example:
//arr1 = [1];
// arr2 =[1];
// arr1 ==arr2;
// output -- false
// here even thou the values of both array is same but still we get output as false
// that's bcoz array assigns its address differently even it has same values stored
//true case
// let arr =['a','b'];
// undefined
// let arrcopy= arr;
// undefined
// arrcopy
// (2) ['a', 'b']0: "a"1: "b"length: 2[[Prototype]]: Array(0)
// arrcopy.push('c');
// 3
// arr
// (3) ['a', 'b', 'c']
// arr ==arrcopy
// true

//For of loops Syntax
// let fruits = [
//   ["mango", "apple", "cheeko"],
//   ["tomato", "cherries", "beries"],
// ];
// for (list of fruits) {
//   for (name of list) {
//     console.log(name);
//   }
// }

//Javascipt Part-5
//Object Literals
// used to store keyed collections & complex entites.
// property => (key,value)pair
// objects are a colllection of properties
// Add_update values in Object Literals -->to replace or change some value
// this method is used object literals
//syntax given below
// const student2 = {
//     name: "sabah",
//     age: 20,
//     usnno: "4VM21EC075",
//     marks: 90,
//     gender: "female",
//     city: "bangalore",
//   };
//   console.log(student2);
//Updation
// student2.city
// 'bangalore'
// student2.city = "Pune";
// 'Pune'

//Nested Objects - Objects ke andar objcts
//Syntax :
// const classInfo = {
//     student1: {
//       name: "sabah",
//       age: 20,
//       usnno: "4VM21EC075",
//       marks: 90,
//       gender: "female",
//       city: "bangalore",
//     },
//     student2: {
//       name: "sabah",
//       age: 20,
//       usnno: "4VM21EC010",
//       marks: 90,
//       gender: "female",
//       city: "bangalore",
//     },
//   };

//   console.log(classInfo);

//Array of Objects --same as nested objects
//Storing Informtion of multile students
//Syntax
// const classInfo2 = [
//   {
//     name: "sabah",
//     age: 20,
//     usnno: "4VM21EC075",
//     marks: 90,
//     gender: "female",
//     city: "bangalore",
//   },
//   {
//     name: "sabah",
//     age: 20,
//     usnno: "4VM21EC010",
//     marks: 90,
//     gender: "female",
//     city: "bangalore",
//   },
// ];
// console.log(classInfo2);

//Math Objects
// Methods;
// Math.abs(n);-- returns a Positive value
// Math.pow(a, b); returns a power
// Math.floor(n);  round of to smallest integer value
// Math.ciel(n);round of to largest integer value
// Math.random(); generates a random value lessthan 1 and not morethan 1(Mostly used)

//New Chapter - Functions
// functions in JS
// function defnition(telling JS)
//  function FuncName(){
//     //do Something
//  }
//  Function Calling(Using the function)
// func Name();

//Functions With Arguments
// Values we pass to the function
// function funcName(arg1,arg2.....){
//     //do something
// }

//Return --> return keyword is used to retrun some value from the function
// Syntax
// function funcName(arg1,arg2){
//     //do something
//     retrun value;
// }

// Scope
// Scope determines the accessibility of variables,objects,and functions from different
// parts of the code
// >Function Scope - Variables defined inside a function are
//not accessible(Visible) from outside the function
// >Block - variables declared inside a {} bloack cannot
// be accessed from outside the block
// >Lexical - varaibles defined outside a function can be accessible inside
//another funcdefined after the variable declaration.
//The opposite is NOT true

// Always the function scope is gretater than global scope [function scope >>> Global scope]

//Function Expressions --> Javascript Part 6
//function expressions are the nameless functions defined by any variable , this method is also used to define the f
//functions
// eg: let sum = function(a,b){
//     return a *b;
// }
// output:
// sum(7,9)
// 63
//Higher order functions
// A function that performs one or both
// *takes one or more than one arguments
// *returns a function
// eg:function multipleGreet(func, n){
//     for(i =1;i<n;i++){
//         func();
//     }
// }
// let greet  = function(){
//     console.log("helloo");
// }
// multipleGreet(greet , 9);
// 8 helloo

//Javascript Part - 7
//this keyboard
//This keyword refers to an object that is executing the current piece of  code
// const student = {
//     name: "sabah",
//     eng: 56,
//     math:99,
//     phy:89,
//     sci :94 ,
//     getAvg(){
//         let avg  = (this.eng +this.math+this.sci+this.phy)/3;
//         {
//             console.log(avg);
//         }
//     }
// }
// output:
// student.getAvg();
//  112.66666666666667

//Try and Catch statements
// try statements --> allows you to define a block of code to be tested for errors while it is being excecuted
// catch statements --> allows you to define a block of code to be executed ,if an error occurs in try block
// eg: console.log("helloo");
// console.log("heloww");
// let a = 9;
// try {
//   console.log(a);
// } catch {
//   console.log("caught an error i:e a is not defined");
// }
// console.log("hii there ");
// console.log("nice to meet you");

// Miscellnious Topics
//1. Arrow Functions
//syntax --> const func = (arg1 , arg2...func) =>{function defnition}
// Arrow functions -> Implicit Retrun
// only value retruns in Implicit arrow function neither
// it prints anything nor calculates anything

//Set timeout  - It is a  inBuilt Window function
//setTimeout(function,timeout);
//timeout value is always in milli seconds [ms]
// It's similar to Giving delay in the program
// eg:Syntax
// console.log("Hi there");
// setTimeout(() => {
//   console.log("Sabah Sultana");
// }, 5000);
// console.log("welcome to");

// output :
// Hi There;
// welcome to;
// after 4 seconds[4000= 4s] Sabah Sultana prints
// eg 2:
// console.log("I wanna persue my dream in ");
// setTimeout(() => {
//   console.log(" FANNG Companies");
// }, 5000);
//Applications of it is seen in API calls

//SetInterval -- Same function as SetTimeout but it executes the operation after an delay
//recursively[continously]
// eg: console.log("I wanna persue my dream in ");
// setInterval(() => {
//   console.log(" FANNG Companies");
// }, 1000);
// console.log("Aameen");
// output
// I wanna persue my dream in
// examples.js:11 Aameen
// examples.js:3 Sabah Sultana
// 26 FANNG Companies [26 times it has executed FANNG organisations]
// To stop this recursive execution use clearInterval id
// eg:console.log("I wanna persue my dream in ");
// let id = setInterval(() => {
//   console.log(" FANNG Companies");
// }, 1000);
// console.log("Aameen");
// console.log(id);
// clearInterval(1);
// function stops performing

// Javascript Part -8
//Array Methods
//forEach ,map,filter, some, every, reduce

//1.forEach : syntax arr.forEach(some function defnition or name);
//map syntax => let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//   return el * 4;
// });

//filter
//EG 1: let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = nums.filter((num) => num % 2 == 0);

//Eg 2 : let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let even = nums.filter((num) => num % 2 == 0);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 56, 75, 89];
// let ans = num.filter((el) => {
//   return el > 10;
// });

//Every Method  --> exactly similar to logical AND
//returns only two values either true or false
// Returns true if evevry element of array gives true for some function.
// else returns false.
// Syntax : arr.every(some function defnition or name);
// [2,4,6,8,10].every((el) => el %2 == 0 ) ;
// true
// [2,4,6,8,10 , 79,55].every((el) => el %2 == 0 ) ;
// false

//Some Method --. Similar to logical OR
//returns only two values either true or false

// Reduce Method
// let nums = [10, 20, 80, 90, 60, 40, 70];
// let min = nums.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });
// console.log(min);

//Spreads
//Spreads are indicated by ... ( three dots);
// Eg: console.log("sabahsultana");
// sabahsultana
// undefined
// console.log(..."sabahsultana");
//  s a b a h s u l t a n a

//Rest
//Allows a function to take an indefinite number of arguments and bundle them in an array

//**JavaScript Part - 9 DOM [Document Object Model]**
// The DOM represents a document with a logical Tree;
// It allows us ti manipulate/change webpage content (HTML elements)
//To see the Objects of any webpage type console.dir(document); , then we could find all the properties
// in object form type console.dir(document);
//To Manipulate the changes in webpage follow two steps
//Step1 --> Select the element
//step 2 -->  change/manipulate

//SelectingElements
//getElementById  --> returns the Element as an Object or null (if not found)
//Syntax --> document.getElementByID(main Img);
//Select Elements By className
//getElementByClassName -- > returns the element as an HTML collection or an empty collection(if not found);
//Select Element by Tag Name
// let cards = document.getElementsByClassName("card-img");

// for (i = 0; i < cards.length; i++) {
//   console.dir(cards[i]);
// }
//images objects gets printed;
//if we want to print the source then follow this Syntax;
// let cards = document.getElementsByClassName("card-img");

// for (i = 0; i < cards.length; i++) {
//   console.dir(cards[i].src);
// }
//src of all images will be obtained;

//Select ElementsByTagName
//returns the element as an HTML collection or an empty collection(if not found);
//Syntax
// document.getElementsByTagName("h2");
// HTMLCollection(3)[(h2, h2, h2)];
// document.getElementsByTagName("h2")[1].innerText = "Liked Songs";
// ("Liked Songs");

//Query Selectors
//Allows us to use any CSS selector , and their are more frequently used than Selectors of HTML
// document.querySelector("p"); //Selects first p element
// document.querySelector("#myId"); //Selects first element with id = myId
// document.querySelector(".myClass"); //Selects first element with class = myClass
// document.querySelectorAll("p"); // Selects all the p tag elements

//Manipulating Attributes  --> images , class , styles , src etc
// Object.getAttribute(attr);
// Object.setAttribute(attr, val);
// the above two terms are called getters and setters

//Manipulating Styling
//Style Property
// classList.add() to add new classes;
// classList.remove() to remove classes;
// classList.contains() to check if class exits;
// classList.toggle() to toggle btw add & remove; if class is present it retruns false, if not present then it adds
//the class & returns us true; [Simple ways it acts like toggling]
// Eg :
// let cards = document.querySelector('.card');
// undefined
// cards.classList.contains("card-img");
// false
// cards.classList.contains("card");
// true
// cards.classList.toggle("card");
// false
// cards.classList.toggle("card-img");
// true
// cards.classList.toggle("card-img");
// false

//Navigation iski helps se ek element se dosri element ko jaa sakti
// Three Properties of navigation are :
// 1. parentElement
// 2. Children
// 3. previousElementSibling/nextElementSibling
// Eg:
// cards.parentElement
// <div class=​"main-content">​…​</div>​
// cards.children
// cards.childElementCount
// 1
// cards.previousElementSibling;
// <h2>​Recently Played​</h2>​
// cards.nextElementSibling;
// <h2>​Trending now near you​</h2>​
// cards.previousElementSibling.style.backgroundColor = " yellow";
// ' yellow'
// cards.nextElementSibling.style.width = "100px";
// '100px'

//Adding Elements on Page -anything could be added using javascript
//document.createElement("p");
//AppendChild(element)
//append(element) any text or paragraph can be appened
//prepend(element)
//insertAdjacent(where,Element)

//DOM Events Events are signals that tell us that something has occured
// (user inputs/actions) Makes the webPage useful for day to day activties
//Inline DOM events -Multiple functions can't be executed
//accessing the button
// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//   btn.onclick = Liked;
//   btn.onmouseenter = function () {
//     console.log("your entered a button");
//   };
//   console.dir(btn);

//   function Liked() {
//     console.log("Your post  was clicked");
//   }
// }

//Event Listeners -  To execute multiple functions Event Listeners are used
//addEventListener Property of EventListener
// Element.addEventListener(Event, callBack);
// // Eg: accessing the addEventListener
// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//   btn.addEventListener("click", Liked);
//   btn.addEventListener("click", Loved);
// }
// console.dir(btn);

// function Liked() {
//   console.log("Your post  was clicked");
// }

// function Loved() {
//   console.log("Your post  was Loved");
// }

//Activity to generate a random color in a  div box
//code
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   let h1 = document.querySelector("h1");
//   let randomColor = getRandomcolor();
//   h1.innerText = randomColor;

//   let div = document.querySelector("div");
//   div.style.backgroundColor = randomColor;

//   console.log("color updated successfully");
// });

// function getRandomcolor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let color = `rgb(${red},${green},${blue})`;
//   return color;
// }
// CSS Styling
// body {
//     text-align: center;
//     display: flexbox;
//   }

//   div {
//     height: 100px;
//     width: 500px;
//     border: 1px solid black;
//     text-align: center;
//     margin: auto;
//   }
//EventListeners can be apllied to other elements as well like div,paragraph etc

//This in EventListener
// When 'this' is used in a callBack of Eventhandler of something,
// it refers to that something

//Use of this is Illustrated as follows
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");
// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

//KeyBoards Events
// let btn = document.querySelector("button");
// let input = document.querySelector("input");
// input.addEventListener("keydown", function (Event) {
//   console.log("key =", Event.key);
//   console.log("code = ", Event.code);
//   console.log("key pressed");
// });

//form events
// Event Listeners for forms are as follows
// //HTML CODE
// <form action="/action">
// <button>Register</button>
// <input placeholder="UserName" />
// </form>
// //CSS CODE
// let form = document.querySelector("form");

// form.addEventListener("submit", function (Event) {
//   Event.preventDefault();
//   alert("form submitted");
// });

//How data is extracted from form is given as:
// let form = document.querySelector("form");

// form.addEventListener("submit", function (Event) {
//   Event.preventDefault();

//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");
//   console.log(user.value);
//   console.log(pass.value);

//   alert(`hi ${user.value}, your password is ${pass.value}`);
// });

//Extracting Data from form using 'this' keyboard
// let form = document.querySelector("form");

// form.addEventListener("submit", function (Event) {
//   Event.preventDefault();
//   console.dir(form);

//   let user = this.elements[0];
//   let pass = this.elements[1];

//   console.log(user.value);
//   console.log(pass.value);

//   alert(`hi ${user.value}, your password is ${pass.value}`);
// });

//More Events
// Change Events--> The change Event occurs when the value of an Element
// has been changed(only works on<input>,<textarea> , and <select></select> elements);

// Input Event
// --->The input event fires when the value of an <input></input> , <select></select>
// // or <textarea></textarea> element has been changed
//An example of change and input events is as shown
// let form = document.querySelector("form");

// form.addEventListener("submit", function (Event) {
//   Event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {
//   console.log("input changed");
//   console.log("final value = ", this.value);
// });

// user.addEventListener("input", function () {
//   console.log("input event");
//   console.log("final value = ", this.value);
// });

//Event Bubbling
//Code for Event bubbling where we make use of
//Event.stopPropogation() function
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was clicked");
// });

// ul.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("ul was clicked");
// });

// for (li of lis) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was clicked");
//   });
// }

//Todo App Activity Code
//HTML CODE
{
  /* <body>
    <h1>Todo App</h1>
    <input placeholder="enter your tasks" />
    <button>Add Task</button>
    <ul>
      <li>Eat<button class="delete">delete</button></li>
      <li>Sleep <button class="delete">delete</button></li>
      <li>Code<button class="delete">delete</button></li>
    </ul>
    <script src="examples.js"></script>
  </body> */
}
//JavaScript Code[ concept of Event bubbling and Event deligation is sed in making of Todo App]
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");

// btn.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.innerText = inp.value;

//   let delbtn = document.createElement("button");
//   delbtn.innerText = "delete";
//   delbtn.classList.add("delete");
//   item.appendChild(delbtn);
//   ul.appendChild(item);
//   inp.value = "";
// });
// ul.addEventListener("click", function (event) {
//   if (event.target.nodeName == "BUTTON") {
//     let listItem = event.target.parentElement;
//     listItem.remove();
//     console.log("deleted");
//   }
// });

// JSON in JavaScript;
// JSON --> JavaScript object notation
// JSON it seemlessly integrates with javascript
// Always use JSON in Double quotes - mandatory step
// Arrays , null value , boolean , Objects , nested objects,strings all these dataTypes
// can be used in JSON (Object ke andar object also can be used which is called Nested objects)
//Syntax --> It shd be always initialised with doubleQuotes "" , followed by {}
//Eg:
// {
//   "name": "sabah Sultana",
//   "age": 21,
//   "qualification": "BE in ECE",
//   "status married/single": null,
//   "foodItemsPreffered": ["Biryani", "samosa", "snacka"]
// }
// //Method to print in console window
// myJson = `{
//   "name": "sabah Sultana",
//   "age": 21,
//   "qualification": "BE in ECE",
//   "status married/single": null,
//   "foodItemsPreffered": ["Biryani", "samosa", "snacka"]
// }`;
// JSON = parse(myJson);
// parsed =  JSON.parse(myJson);
// {name: 'sabah Sultana', age: 21, qualification: 'BE in ECE', status married/single: null, foodItemsPreffered: Array(3)}
// age
// :
// 21
// foodItemsPreffered
// :
// (3) ['Biryani', 'samosa', 'snacka']
// name
// :
// "sabah Sultana"
// qualification
// :
// "BE in ECE"
// status married/single
// :
// null
// [[Prototype]]
// :
// Object
//to print single dataType value follow the syntax as shown
// parsed.foodItemsPreffered[2];
// 'snacks'
// parsed.qualification;
// 'BE in ECE'

//Async Functions in Javascript
// Interview important topic;

//JSON in Javascript
//JSON --> [Javascript object Notation]
//* JSON.parse(data)Method
//To parse a string data into a JS Object
//*JSON.stringify(JSON) method
// To parse a JS object data into JSON

//Javascript Part -12
// Testing API's requests
//Tools used are Hoppscotch ,Postman
//What are API's? Api's are the URL which is used to send a request in retrun where we get
//the response
// API's are the application programming interface

//My first API request using Fetch
// res.JSON() helps us to convert the data into readable form for the user
//my first API request syntax is as follows
// let url = "https://catfact.ninja/fact";
// fetch(url) //1st request
//   //Promises methods are used to send or recieve requests from API's
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     console.log("data1 =", data.fact);
//     return fetch(url);
//   })

//   //2nd request
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     console.log("data2 =", data.fact);
//   })

//   .catch((err) => {
//     //else we get  error
//     console.log("ERROR-", err);
//   });
// using await and async functions
// Syntax given below :
// let url = "https://catfact.ninja/fact";
// async function getFact() {
//   let resp = await fetch(url);
//   let data = await resp.json();
//   console.log(data);
// }
// first it executes the await functions as we have given the keyword as await
// then it prints the data ;

//Terminal
//Basics commands
// ls= list files;(show my files)
// pwd = print working directory(where am I?);
// clear -clear screen
//Inside & outside the directories we can type cd commands
//cd - change directory
//cd .. ek step peche jane
//cd ../.. two step peche jane
//~ takes us to  Home directory
// [/] -> root directory
//mkdir --> command creates folders for us
//touch command --> to create new files in a directory
//touch command is used by giving proper extensions we obtain new files

//New Chatper Git_Github
// what is Git ?
// It is a version control system --> online tool that helps us to tracks changes in code
// What is Github?
// It is a website that where we host repositories online
// configuring the Git & github through username & userEmail
//Basic Commands [Very Important]
//1: Clone(make a copy or duplicate) Command - cloning a repo on our local machine
//(online copy will be available on github that copy can be downloaded & n copied on
//  VS code is that cloning)
//Command git clone <some link>
//command ls -a to read all the hidden files in that above folder
//status command displays the state of the code( This command is used to check the status of the code)
// git add ./git add --a --> this commands adds all the files in the vs code
//git commit -m "some message" msg shd be meaningfull followed by it check the status of the msg

//The hanges made in our local system can be also visible in remote system(i:e on Github)
//using Push command
//Push command -> to upload local repo content to remote repo
// git push origin main command used
// git init -->  command is used to create a new git repo in local system rather than making
//a new repo in github
//To add & commit at the same time we use of command --> *git commit -am*

//BACKEND - DEVELOPMENT
//Starting with Node.js
// Node.js is called the runtime of javascript basically Node.js can be used to run javascript
// outside the browser
//Node.js also adds some functionality to Javascript engine V8 to do some more usefull stuff

//Async and Promise Methods
//Eg: syntax is as shown
// const pros = () => {
//   return "Hi I'm advantageous";
// };
// const cons = () => {
//   return "Hi I'm disadvantageous";
// };
// const ledger = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hi there! this is your ledger sheet here");
//       //   reject("I'm busy");
//     }, 3000);
//   });
// };

// const decision = async () => {
//   let benfit = pros();
//   console.log(benfit);
//   let balance = await ledger();
//   console.log(balance);
//   let loss = cons();
//   console.log(loss);
// };
// decision();
// Hi I'm advantageous
// waits for a few seconds of setTimeout then executes the func ledger()
// Hi there! this is your ledger sheet here
// Hi I'm disadvantageous

// Sending Responses in Node.js
// After creating the server by the create listener method we can send responses as well
//Syntax is as shown
// console.log(req.method,req.url,req.headers);
// first set res.setHeader('Content-type','text/html') this is the defualt we had to enter
// given by the browser ; Syntax shown below
// To write the response we make use of res.write() method
// const htpp = require("http");
// const server = htpp.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   res.setHeader("Content-type", "text/html");
//   res.write("<html>");
//   res.write("<head<title>My first Node.js application</title</head>");
//   res.write("<body><h1>Hi this is my first Node.js server</h1></body");
//   res.write("</html>");
//   res.end();
// });
// server.listen(9000);
// In the localHost9000 page we see our html content , to search for the headers we can navigate in the
// developers tools --> Network section --> by pressing ctrl+R to see the headers ,requets,url entered by us

//Connecting Requests & responses
//GET & POST are the two http requests available by default
//GET request is automatically sent whenyou click a link or enter a url
//POST request has to be set up by us by creating  a from like html element

//Routing & Redirecting REquests is asshown on the network page of server were we get the response of
//requested message
// const fs = require("fs");
// const http = require("http");
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.setHeader("Content-type", "text/html");
//     res.write("<html>");
//     res.write(" <head><title>Enter Message</title></head>");
//     res.write(
//       "<body><form action='/message' method='POST'><input type='text'name='Message'></input><button type='submit'>Send</button></form></body>"
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/message" && method === "POST") {
//     fs.writeFileSync("message.txt", "DUMMY");
//     res.statusCode = 302; //by default we give status code as 302
//     res.setHeader = ("Location", "/");
//     return res.end();
//   }

//   res.setHeader("Content-type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>Node.js Application</title></head>");
//   res.write("<body>Hi this is  Node.js Server</body>");
//   res.write("</html>");
//   res.end();
// });
// server.listen(5000);

//Parsing requests bodies
