// primitive data types
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol

// Note- It is important to remember that any data type that is not a primitive data type, is of Object type in javascript. 


// hoisting
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction(){ 
    console.log(" Hello world! ");
} 
//Note - Variable initializations are not hoisted, only variable declarations are hoisted:


// type coersion
var x = 3;
var y = "3";
x + y // Returns "33" 
//Note - Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.
var x = 3;
var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type


//All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.


isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true


// pass by value
var a = 1
var b = a
a = 2 // b = 1

//pass by reference
var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;
obj.name = "Akki";
console.log(obj2);
// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.


//IIFE
//self invoking funciton
(function(){
    //do something
})()

//Higher Order Functions 
//Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
function higherOrder(){
    return function(){
        return 'do something'
    }
}
var x = higherOrder()
x(); // do something

//this
// The “this” keyword refers to the object that the function is a property of.
function doSomething() {
    console.log(this);
}

doSomething(); // global object

var obj1 = {
    name: 'tahir',
    getName: function(){
        console.log(this.name);
    }
}

var obj2 = {
    name: 'jaani',
    getName: function(){
        console.log(this.name);
    }
}

obj1.getName()//tahir
obj2.getName()//jaani

// call apply and bind
//call is a function that you use to change the value of this inside a function and execute it with the arguments provided.
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	// Car.call(this, "convertible", "petrol");
    Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
    // Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
	this.brand = brand;
	console.log(`Car details = `, this);
}

function setPrice(price){
    Car.call(this,'convertible','diesel')
    this.price = price
    console.log(`Car details = `, this)
}
const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);

//bind
var obj1 = {
    valueOfThis: function () {
        return this;
    }
}
var obj2 = {
    valueOfThis: function() {
        return this
    }.bind(obj2)
}

// map filter reduce >>> forEach
// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
[20, 24, 56, 88]

var officersIds = [];
officers.forEach(function (officer) { //needs to create new array
    officersIds.push(officer.id);
});
//with map
const officerIds = officers.map(officer => officer.id)

//reduce
var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];
//total experience
const totalExp = pilots.reduce((acc, pilot)=> acc + pilot.years,0)

//filter
var pilots = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels",
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire",
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire",
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels",
    }
];
var rebels = pilots.filter(pilot => pilot.faction =='Rebels')
var empire = pilots.filter(pilot => pilot.faction =='Empire')

//scope chaining
function favFunction(){
    var x = 667;
    var anotherFavFunction = function(){
      console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
    }
    anotherFavFunction()
}
favFunction()

//Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
// closure - function bundled together with its lexical scope

function randomFunc() {
    var obj1 = { name: "Vivian", age: 45 };

    return function () {
        console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the randomFunc function is executed
    }
}

var initialiseClosure = randomFunc(); // Returns a function
initialiseClosure(); 

//callbacks
//A callback is a function that will be executed after another function gets executed
function divideByHalf(sum) {
    console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum) {
    console.log(sum * 2);
}

function operationOnSum(num1, num2, operation) {
    var sum = num1 + num2;
    operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20

//Memoization is a form of caching where the return value of a function is cached based on its parameters.
function memoizedAddTo100(){
    var cache = {}

    return function(num){
        if(num in cache){
            return cache[num]
        }
        cache[num] = num + 100
        return cache[num]
    }
}
var memoizedFunc = memoizedAddTo100();
memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return

//constructor function
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var person1 = new Person("Vivek", 76, "male");
console.log(person1);

//arrow functions
var obj1 = {
    valueOfThis: function () {
        return this;
    }
}
var obj2 = {
    valueOfThis: () => {
        return this;
    }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object


//rest vs spread operator
// rest is for function parameter
function addAllArgs(...args) { //parameter
    let sumOfArgs = 0;
    let i = 0;
    while (i < args.length) {
        sumOfArgs += args[i];
        i++;
    }
    return sumOfArgs;
}

addAllArgs(6, 5, 7, 99); // Returns 117 //arguements
addAllArgs(1, 3, 4); // Returns 8
//A parameter is a variable in a function definition. 
// It is a placeholder and hence does not have a concrete value. 
//An argument is a value passed during function invocation.

//spread is for object and array literals
let obj1 = {x:'Hello', y:'Bye'};
let obj2 = {z:'Yes', a:'No'};
let mergedObj = {...obj1, ...obj2}; // Spreads both the objects and merges it
console.log(mergedObj);
// Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};

//promises
const promise = new Promise((resolve, reject)=>{
    if('condition'){
        resolve('success');
    }else{
        reject('failed')
    }
})

promise.then(result=>{
    console.log(result);
}).catch(()=>{
    console.log('error')
})

// multiple promises
const promise1 = new Promise((res, rej)=>{
    setTimeout(res, 100, 'one');
})

const promise2 = new Promise((res, rej)=>{
    setTimeout(res, 1000, 'two');
})

const promise3 = new Promise((res, rej)=>{
    setTimeout(res, 2000, 'three');
})

Promise.all([promise1, promise2, promise3]).then(values=>{
    console.log(values);  //['one','two', 'three']
})


//promises
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url=>{
    fetch(url).then(resp => resp.json())
})).then(array => {
    console.log('users', array[0])
    console.log('posts', array[0])
    console.log('albums', array[0])
}).catch('error!')

//async await
const getData = async function() { 
    try{
        const [users, posts, albums] = await Promise.all(urls.map(url=>{
            fetch(url).then(resp => resp.json())
        }))
        console.log('users', users);
        console.log('users', posts);
        console.log('users', albums);
    }catch(err){
        console.log(err);
    }
}

// classes vs generators
// Before ES6 version, using constructor functions
function Student(name, rollNumber, grade, section) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.section = section;
}

// Way to add methods to a constructor function
Student.prototype.getDetails = function () {
    return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade: ${this.grade}, Section:${this.section}`;
}

class Student{
    constructor(name, rollNumber, grade, section){
        this.name = name
        this.rollNumber = rollNumber;
        this.grade = grade;
        this.section = section;
    }
    // Methods can be directly added inside the class
    getDetails() {
        return `Name: ${this.name}, Roll no: ${this.rollNumber}, Grade:${this.grade}, Section:${this.section}`;
    }
}
let student2 = new Student("Garry", 673, "7th", "C");
student2.getDetails();
// Returns Name: Garry, Roll no:673, Grade: 7th, Section:C


//temporal dead zone
x = 23; // Gives reference error
let x;

function anotherRandomFunc() {
    message = "Hello"; // Throws a reference error
    let message;
}
anotherRandomFunc();