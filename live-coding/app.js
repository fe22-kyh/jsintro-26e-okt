//Detta är en rad av en kommentera
/*
Detta är flera
rader
av
kommentarer
*/

//Console.log - använd för att debugga (se värdet av en variabel)
//console.log("Hey batman");

//console.log("Jakob");

//let name = "Gertrude";
// "+" --> concatenation
//console.log("Hey" + " " + name); // "Hey Gertrude, 43"

// lösning 1
//let name = "Gertrude, 43";
//console.log("Hey" + " " + name);

// lösning 2
//let name = "Gertrude";
//let age = "43";

//console.log("Hey" + " " + name + ", " + age);

// lösning 3
//let age = "43";
//let name = "Gertrude, " + age;

//console.log("Hey " + name);

// lösning 4
//let age = 43;
//let name = "Gertrude";
//let greeting = "Hey " + name + ", " + age;

//console.log(greeting);

/* datatyper */
let age = 13; // Datatypen tolkas från värdet av referensen

console.log(typeof age);

let name = "Gertrude";

console.log(typeof name);

console.log("1" + "1"); //concatenation (text operation)

console.log(1 + 1); //addition (number operation)

console.log(typeof 10.3);

console.log(typeof true); // boolean - en flagga som säger sant eller falskt
console.log(typeof false);

let isAdult = age > 18; // Är ålder (">") mer än 18
console.log("Adult: " + isAdult);

let isRetired = age >= 65; // Är ålder (">=") mer eller lika med 65
console.log("Retired: " + isRetired);

let isYoung = age < 120; // Är ålder ("<") mindre än 120
console.log("Young: " + isYoung);

let isTeenager = age >= 13;

/* 
if (condition) {
  // Om condition var sant
} else {
  // Om condition var falsk
}
*/
if (isAdult) {
  //Ifall påståendet inte gäller så hoppar den ner till efter sista if-måsvingen
  console.log(name + " is an adult");
} else {
  console.log(name + " is not an adult");
}

if (isRetired) {
  // en else if stannar när ett villkor är sant (kollar ej resten)
  console.log(name + " is retired");
} else if (isAdult) {
  console.log(name + " is not retired, but is an adult");
} else if (isTeenager) {
  console.log(name + " is not an adult, but is a teenager");
} else {
  console.log(name + " is a kid!");
}
