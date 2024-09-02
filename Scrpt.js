// Topic -  Intro to Javascript
function addNumbers(num1,num2){
    return num1+num2;
}
console.log(addNumbers(1,2));
console.log(addNumbers(1,"utkarsh")) // Output - 1utkarsh
//* Sycnhronous Programming -  One by One task Execution
//* A group of tasks is called thread

// * Callback function -> A function passed into another function as argument
function greeting(name,callback){
    console.log('Hello ' + name + '!\n'); 
    callback();
}
function goodbye(){
    console.log('GoodBye! '); 
}
greeting('Roshan',goodbye)

// Asych
setTimeout(() => {
    console.log('aye')
}, 5000);

// arrow functions
const goofy = ()=>{
console.log("scooby do")
}
goofy();

console.log("hello world")
//Topic - Javascipt and ES6  Date : 24-July-2024 
let names = ['John','bob','Yatharth','Shivani ji','Syed'];
//length
console.log(names.length);
console.log(names[names.length-1])

const surnames = ['Doe','Smith','Shahrawat','Kapoor','Arshad'];
const allNames = names.concat(surnames);

console.log(allNames.reverse())
names.unshift('Hritik')
console.log(names) 

// unshift adds at the first position 

names.shift()
console.log(names)
// unshift  - removes the first element

names.pop();
// pop removes the last element
console.log(names)

names.push('susan')
console.log(names)

// Objects ->  Objects are collections of key - value pairs
// values can be string , numbers,booleans, arrays,functions
//{}
// Syntax is Objectname.key  - > to get the value
// here name is key, "john" is value
const obj = {name:"John"};
console.log(obj)
// we get value through keys using DOT Notation.
console.log(obj.name)

const arr = ['X','Y','Z',['A','B','C',['U','V','W']]];
console.log(arr[3][3][1])

console.log(arr.flat(3))

//Using Objects to make Life Easier 
const person = {
    name:'Tanu',
    age:20,
    graduate:true,
    siblings:['Manu','shyam'],
    greet: function(name){
        console.log("Good Morning " + name) 
    },
    // it has a different use like somebody is typing 
    'random-value':'random',
    obj:{
    obj1:{
        obj2:"h1"
    }
}
}
//Bracket Notation -> If your keys are in string or dynamic (user is giving/typig=ng keys )
console.log(person['random-value'])
// Nested Obj - 
console.log(person.obj.obj1.obj2)


console.log(person.graduate);
console.log(person.siblings[1])
console.log(person.greet('Kinshuk'))
person.name='Sanjana';
person.age  = '30'
// creating new keys
person.city = 'Noida'
person.surname = 'Mishra'

// delete a key
// const siblings = delete person.siblings
console.log(person)
person.greet('Ayan')

// ES-6 2015
//* Destructuring of arrays
//-> faster/easier  way to access/unpack     values from array
const fruits = ['banana','orange','papaya','lemon'];

const [x,,third,fourth] = fruits ;
console.log(fourth)
console.log(x)
console.log(third)

// *Object Destructuring
const bob = {
    name:'Bob',
    last:'Smith',
    city:'Lucknow',
    siblings:{
        sister:'Elizabeth'
    }    
}
const {f,s} = bob;
console.log(f) //  undefined

//! bcox we have to destructure using keys only
// const {name} = bob;
// name = firstname 

// asked in react interview 
const {name: firstname} = bob; // using colon  
// real obj is not changed 
// it is only name
console.log(firstname)
console.log(bob)

// how to access Elizabeth

// const {siblings} = bob;
// const{sister} = siblings;
// console.log(sister)

const {
    siblings:{
        sister },
} = bob

console.log(sister)

//* Spread Operator (always used on iterables(something we can run on a loop ))
// works on     splitting into single items
// iterable arrays
// -> Syntax -> ... 
// !splitting into single items and make a copy  of them 
// allows an iterable to spread individually inside receiver

const udemy = "course";
const letters = [...udemy]
console.log(letters)


const boys = ['Saurabh','Ayan ','Amarjeet']
const girls = ['Priya','Tanu','santoshi']

const bestFriend = 'Akshay Kumar'

const friends = [...boys,bestFriend, ...girls]
console.log(friends);

// what is v8 engine in chrome ?
// LIB UV Engine js
// what is Babel Javascript ?   
// what it does?



