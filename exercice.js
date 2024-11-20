/*exo 1
let number = [1,2,3,4,5];
console.log(number)

//exo2
let fruits = ["apple", "banana","cherry "];
console.log (fruits[1]);

//exo3
let num  =[10, 20,30,40];
console.log(num);
num[3]= 50;
console.log(num);
// exo4
let frt =["mango", "peach", "pear"];
console.log(frt);
frt.push("avocado");
console.log(frt);
// exo 5
let animal =["dog", "cat", "bird"]
console.log(animal);
delete animal[2];
console.log(animal);
// exo 6 
 let user=  {
    name:"fatimazahra",
    age:2
 }
 console.log({ name: "Alice", age: 30 });
 // exo7 
 let person = {
    name: "John",
    age: 25
};
console.log("Name:",person.name)
console.log("Age:",person.age)
//exo8
let book ={
   title:"JavaScript 101",
   author:"John Doe"

}
console.log( book.title,book.author)
book.author="Jane Doe";
console.log( book.title,book.author)
// exo 9
let car = {
     make: "Toyota",
     model:"Corolla"
}
console.log(car.make,car.model)

car.year=2020;
console.log(car);
// exo 10 
let person={
    name:"fatimazahra",
    age:19 
}
let hasAgeProperty= person.hasOwnProperty("age");
console.log(hasAgeProperty)
// exo 11
let tab = [1, 2, 3, 4, 5];
for (tabs in tab)
     { 
        console.log(tab[tabs])
     }
    // exo 12
 let number=[1, 2, 3, 4, 5, 6, 7, 8, 9,
    10]
   function numPair(n){
    return n%2 ===0;

   }
   let pairNum = number.filter(numPair);
   console.log(pairNum)
//exo13
let a=[1, 2, 3]  , b=  [4, 5, 6]


let concArray = a.concat(b);
console.log(concArray);
// exo 14 
 let fruits = ["apple", "banana", "cherry", "date"];
 console.log(fruits)
 delete fruits[1]
 console.log(fruits);
 //exo15
 let numbers = [5, 1, 8, 4, 7]

 numbers.sort((a,b)=>a-b);
 console.log(numbers);
 console.log("-------------16");
 // exo 16
  let numbrs =[1, 2, 3, 4];
 function numDouble(n) {
    return n*2;
 
 }
 let numbrs2= numbrs.map(numDouble)
 console.log(numbrs2)
 // exo 17
 let car= {
    make:"toyote",
    model:"mec",
    year:2020,
    color:"bleu" 

 }
 let  prop = Object.keys(car).length;
 console.log(prop) 
 //exo 18 
 let person ={
    name :"manal",
    age:18,
    occupation:"respo"
 };
for (  let keys in person){
    console.log(keys+""+":" + person[keys]);
}
//exo19
let tableau=[1, 2, 3, 4, 5] ;
let existe= tableau.includes(3);
console.log(existe)
// exo 20 
let  person = {
    name:"wiam", 
    age: 23 

}
let clonPerson= {...person}
clonPerson.age=25;
console.log(clonPerson)
//exo21
let tab =  [1, 2, 3, 4, 5]
function somme (a,b) {
    return a+b
}
let numSomme = tab.reduce(somme)
console.log(numSomme)
// exo 22
let tableau =[
    {
        title:"la boite a merveille",
        author:"med safroui",
        year:2025
    }
    ,
    {
        title:"antigone",
        author:" adene",
        year:2020
    }
    ,
    {
        title:"la boite a merveille",
        author:"john",
        year:2022
    }
]
console.log(tableau[0].title) 
//exo 23
 let per1=  {name: "John", age: 25} 
 let per2 = {city: "Paris", job: "Developer"}

 
 let bookTotale = { ...per1, ...per2}
 console.log(bookTotale)*/
 

// exo 24 
 let person ={
    name:"john",
    age:25,
    contry:"casa"


 }
 let proportyName = Object.keys(person);
 console.log(proportyName)
 



 







