// Let's define this function, add:
// add(2, 2); // 4 :: number

const addFullyTyped = (n: number, m: number): number => n + m;

// Inferred type
const addInferred = (n: number, m: number) => n + m; // number return type is inferred

// Type-Driven Development/Functional style
type AddTDD = (n: number, m: number) => number;
const addTDD: AddTDD = (n, m) => n + m;

// Quokka ==================================================
addFullyTyped(2, 2); // ?
addInferred(2, 2); // ?
addTDD(2, 2); // ?
