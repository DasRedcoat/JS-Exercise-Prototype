/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) { // Airplane is CAPITALIZED - makes it a CONSTRUCTOR
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */


// 🌸🌸🌸🌸🌸 Code 🌸🌸🌸🌸🌸 // 

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  }
  
          Person.prototype.eat = function(edible) {
            if (this.stomach.length < 10) {
              this.stomach.push(edible);
            } 
          }

          Person.prototype.poop = function(poop) {
            this.stomach = [];
          }

          Person.prototype.toString = function(toString) {
            return `${this.name}, ${this.age}`
          }




// 🌸🌸🌸🌸🌸 Breakdown 🌸🌸🌸🌸🌸 

// 🌸 Prototypes, are "Child" functions within the "Parent", ConstructorFunction
//>>> Think like in CSS, Parent-Child relationships of inheritance, within divs/classes.

// 🌸 Arguments, are the same as perameters, but they are what a Contructor Function is constructed with, thus every prototype(child) of a Constructor Function(parent) "lives within the home" of the Parent Function.

// 🌸 A Contructor Function, is a function with pre-built objects and functions. The "Parent" Constructor Function is the "Model" that all "New"



// 🌸🌸🌸 Uncomment below to view 🌸🌸🌸

// function Person(name, age) { //constructor (capital P) with name and age ARGUMENTS, they are "arguments" because they are what the constructor function is CONSTRUCTED AROUND - It's what it needs to work, in any case. 
//   this.name = name; // ability to call "name" argument
//   this.age = age; // ability to call "age" argument
//   this.stomach = []; // ability to call "stomach" and initialize stomach as an empty array
// }

//         Person.prototype.eat = function(edible) { // prototype child function of the Person parent
//           if (this.stomach.length < 10) { // if stomach array length is less than 10
//             this.stomach.push(edible); // push an edible in (if it's 10 or higher, it just won't perform)
//           } 
//         }

//         Person.prototype.poop = function(poop) { // prototype child function that performs the function of emptying the stomach.
//             this.stomach = []; // return the stomach array to an empty array.
//         }

//         Person.prototype.toString = function(toString) { // prototype child function that returns a string, that has their name and age inserted with a template literal; it will plug in whatever it is given.
//           return `${this.name}, ${this.age}`
//           }


// 🌸 ^^^ THERE IS NO CLOSING BRACKET to put them within the scope of the Parent, because prototypes are their own, seperate Child functions from the Parent that can be called in the GLOBAL WINDOW but they can't EXIST, LIVE, or OPERATE without the Parent! (They're all grown up, but they still live under their Parent's roof)


  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
function Car(model, milesPerGallon) { 
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0; 
}

        Car.prototype.fill = function(gallons) {
          this.tank += gallons;
        }

        Car.prototype.drive = function(distance) {
          this.odometer += distance
              return this.tank < distance / this.milesPergallon ? `I ran out of fuel at ${this.odometer}` : false;
        }

        
// 🌸🌸🌸🌸🌸 Breakdown 🌸🌸🌸🌸🌸

// function Car(model, milesPerGallon) { //initialize the car function with the two arguments
//   this.model = model; // intialized the model argument for use
//   this.milesPerGallon = milesPerGallon; // intialized the model argument for use
//   this.tank = 0; // initializes the tank argument and sets it's value to 0
//   this.odometer = 0; // initializes the odometer argument and sets the value to 0
// }

//       Car.prototype.fill = function(gallons) {
//         this.tank += gallons;
//       }
  

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// const baby = new Person({
//   favoriteToy
// })

function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
  Person.call(this, name, age)
}
    Baby.prototype = Object.create(Person.prototype);
    
    Baby.prototype.play = function(play) {
          return `Playing with ${this.favoriteToy}`
        }


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:

  1. Implicit Binding - when a constructor function is invoked, the word to the left of .this is what .this is referring to.

  2. Explicit Binding - Explicitly telling JavaScript using the .call, .apply, or .bind what the .this keyword is referring to.
   - .call we pass in our arguments 1 by 1 - immediatly invokes the function!
   - .apply - we pass in our arguments as an array - immedialty invokes the function
   - .bind - we pass in our arguments 1 by 1 - it does not immediatly invoke the function, instead it returns a bran new function that can be invoked later

  3. New Binding - Using the "new" keyword constructs a new object and "this" points to it. When a function was invoked as a constructor function using the new keyword "this" points to the newly created object. 

  4. Window/Global Binding - Bound to the global window, not what we want because we want everything to be bound to the parent Constructor Functions.

*/
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}