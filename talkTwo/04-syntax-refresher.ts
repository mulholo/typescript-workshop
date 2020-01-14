/* =========================================================
   04 - Syntax Refresher (TypeScript Cheatsheet)
========================================================= */

// Superset of JavaScript ----------------------------------

// - All JavaScript is TypeScript (but not all TS is JS)

// Variable Type Declarations ------------------------------

// Declaring the type of a variable
const companyName: string = "Memrise";
const yearFounded: number = 2010; // no int/float/etc
const isBold: boolean = true;

// All the basic types of JavaScript are available
// - number
// - string
// - boolean
// - null       (more on this later)
// - undefined  (more on this later)
// - object     (more on this later)
// - symbol     (probably won't need this)

// Functions -----------------------------------------------

// You can declare function params and return types inline:

// Arrow syntax
const stringifyYear = (year: number): string => {
  return year.toString();
};
stringifyYear(yearFounded); // "2010";

// `function` keyword syntax
function printName(name: string): void {
  console.log(name);
  // returns nothing
}
printName(companyName); // 'Memrise'

// Or you can declare function types separtely to the func

type Incrementer = (n: number) => number;
const incrementByOne: Incrementer = n => n + 1;
incrementByOne(1); // 2

// objects, `type` and `interface` -------------------------

// One-off object types
const companyA: {
  name: string;
  yearFounded: number;
  isBold: boolean;
} = {
  name: "Memrise",
  yearFounded: 2010,
  isBold: true
};

// Extraction of object types into `type`
// Works, but don't do this (just convention)!!!
type TCompany = {
  name: string;
  yearFounded: number;
  isBold: boolean;
};

// Extraction of object types into `interface`
// Do this for object types
interface ICompany {
  name: string;
  yearFounded: number;
  isBold: boolean;
}

// use 'object', never 'Object' or '{}'
// - 'object' is an object (what you probably want)
// - `Object` or '{}' can mean much more general things
//   basically anything

// Unions --------------------------------------------------

// You can combine types using unions
// - This is a good example of where you would use type (not
//   interface)
// - This is often a better solution than an enum
type Language = "French" | "Spanish" | "Thai" | "Mandarin";

const spokenInFrench: Language = "French";

// Type Inference ------------------------------------------

// TypeScript does a lot of work for you and is surprisingly
// good at inferring types

// string return is inferred here
const inferredStringifyYear = (year: number) => {
  return year.toString();
};
typeof stringifyYear === typeof inferredStringifyYear; // 'true'

function definitelyNumber(input: string | number): number {
  // change 'number' to something else to see things break
  if (typeof input === "number") {
    return input;
  }
  return parseFloat(input);
}
definitelyNumber(2);
definitelyNumber("124124");

// `any` and `unknown` -------------------------------------

// `any` is bad
const addSomething = (a: any, b: any) => {
  return a + b;
};

addSomething(7, 2); // 9. Fine
addSomething("a", "b"); // 'ab'. Fine
addSomething(2, "asdfa"); // '2asdfa'. Maybe fine?
addSomething({ age: 27 }, { age: 32 }); // The string "[object Object][object Object]"!!!

// `unknown` is better
const addSafe = (a: unknown, b: unknown): number => {
  // This wouldn't compile:
  // return a + b;

  // So we have to check the types do what we want:
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Cannot add a and b");
};
addSafe(2, 3); // 5

// - 'unknown' is useful for API data where you're unsure

// Generics ------------------------------------------------

interface Pet {
  legs: number;
  name: string;
}

interface Dog extends Pet {
  bark: () => void;
  legs: 4;
}

interface Cat extends Pet {
  meow: () => void;
  legs: 4;
}

// Generics are type parameters that we can pass around
interface Person<P extends Pet> {
  name: string;
  age: number;
  pet: P;
}

type DogPerson = Person<Dog>;
type CatPerson = Person<Cat>;

/* =========================================================
   ERROR REMOVAL: IGNORE EVERYTHING BELOW HERE
========================================================= */

yearFounded;
isBold;
companyA;
spokenInFrench;

export {};
