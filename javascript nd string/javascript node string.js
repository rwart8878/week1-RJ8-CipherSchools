//variable declaration
// 3ways
// var const let

// var myName = "John";
// console.log(myName);

// let myName="John";
// console.log(myName);

// let myName="John";
//  myName="Rupam";
//  console.log(myName);


//  const =no redeclartion will done as its a block scopl varaible

// {
//     var=5;
// }
// console.log(var);

// string interepolation

// let firstName = "Rupam";
// let lastName = "Tiwary";

// // let fullName=firstName +" "+ lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);
// console.log(firstName);


// arrow function

// let addTwoNumber =(num2,num1)=>{
//     return num1+num2;
// }
// console.log(addTwoNumber(2,4));

// spread operator

// let array = [5,10,15,20,25];
// // console.log(...array);
// console.log(...array,30,35);


// rest operstor

// use function 

// let testFunction=(...args)=>{
//     console.log(args);
// }
// testFunction(1,2,4,5,6,7,8,9);








//how to take input from user

// let winningNumber=19;
// let userGuess = prompt("Guess a number");

// if(userGuess === winningNumber){
//     console.log("your guess is right !!");
// }else{
//     if(userGuess<winningNumber){
//         console.log("too low !!");
//     }else{
//         console.log("too high!!"); 
//     }
// }

// switch case

//  let day =-1;
//  switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default: 
//         console.log("Invalid Day"); 
//  }


// while loop;


// let num=10;
// let total =0;
// let i=0;
// while(i<=10){
//     total = total + i;
//     i++; 
// }
// console.log(total);

// for(let i=0;i<=9;i++){
//     console.log(i);
// }

// let fruits=["apple","mango","grapes"];
// let numbers =[1,2,3,4];
// let mixed = [1,2,3,4,"mixed"];
// console.log(mixed);     

// let fruits=["apple","mango","grapes"];
// console.log(Array.isArray(fruits));

// let fruits=["apple","mango","grapes"];
// fruits.unshift("banana")

// /array Clone
//array concatenate

// let array1=["item1","item2"];
// let onneArray=["item5","item6"];
// // // let array2=[].concat(array1); //clone
// let array2=[...array1, ...onneArray]; //clone

// // array1.push("item3");
// console.log(array2);
// let fruits=["banana","apple","grapes"];
// let fruit2=[];
// for(let i=0;i<fruits.length;i++){
//     fruits.push(fruits[i].toUpperCase());
// }

// while loop in Array
// console.log(fruits2);
//  const fruits=["apple","mango","grapes"];
//  const fruits2 = [];
//  let i = 0;
//  while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
//  }
//  console.log(fruits2);

// const fruits = ["apple","mango","grapes","fruits4"];
// const fruits2 = [];
// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

// const myArray = ["value1","value2","value3","value4"];
// let [myvar1,myvar2,...myNewArray]=myArray;
// console.log(myNewArray);


// obj

// const person = {names:"Harshit",age:22};
// console.log(person);
// console.log(person.age);
// person.gender="male";
// console.log(person.gender);

//  const person = {
//     name:"harsh",
//     age:22,
//     "person hobies":["guitar","sleeping","reading","learning"]
//  }
//  for(let key in person){
//     console.log(person[key]);
//  }
//  computed property

// const key1 ="objkey1";
// const key2 ="objkey2";
// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1]:value1,
//     [key2]:value2

// }
// console.log(obj);



//spresd operator 
// const obj1={
//     key1:"value"
//     key2:"value2"
// 


// const band = {
//     bandName:"led",
//     famousSong:"stairway",
// };

// const users = [
//     {userId:1,firstName:"harshit",gender:"male"},
//     {userId:2,firstName:"mohit",gender:"male"},
// ]
// // for(let user of users){
// //     console.log(user.firstName);
// // }

// const [{firstName},{gender}] = users;
// console.log( firstName);


// function

// arrow function

// const isEven = (number)=>{
//     return number % 2 == 0;
// }

// for each loop
// // const numbers = [4,2,5,8];
// // numbers.forEach(function(number){
// //     console.log(number*3);
// // })
// map methiod

// const numbers = [3,4,5,6,7];
// const square = (number)=>{
//     return number * number;
// }
// numbers.map(square);
// console.log(numbers.map(square));

// // .map based on array

// // let array =[1,2,3,4,5];
// // function functionForMap(element){
// //     return element * element;
// // }
// // let newArray = array.map(functionForMap);
// // console.log(newArray);
// // for(let i = 0; i<array.length;i++){
// //     newArray[i]=array[i]*array[i];
// // }
// // console.log(newArray);


// // let array=[5,6,7,8,9];
// // let newArray = array.map((element)=>{
// //     return element * element;
// // });
// // console.log(newArray);


// //  for each 

// // let array = [1,2,3,4,5,6,7];
// // array.forEach((element)=>{
// //     console.log(element);
// // })


// // /filter

// // let array = [10,20,30,40,50];
// // let newArray = array.filter((element) =>  element >= 30);
// // console.log(newArray);

// // .find


// // let array = [10,20,30,40,50];
// // let temp = array.find((value)=>{
// //     return value>20;
// // });
// // console.log(temp);
 
// //  .sort
// // let array = [1,23,4,4,5,6];
// // let sortedArray = array.sort((el1,el2)=>{
// //     el1=Number(el1);
// //     el2=Number(el2);
// //     return el1-el2;
// // });
// // console.log(sortedArray);


// // obj destructuring 

// let myObj = {
//     name: "Alex",
//     age:24,
//     city:"londn",
//     passport:"123acvvvb",
// }
