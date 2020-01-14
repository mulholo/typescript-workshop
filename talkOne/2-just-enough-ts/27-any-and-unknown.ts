// any is safe
// too safe...

const add = (a: any, b: any) => {
  return a + b;
};

add(7, 2); // ?
add("a", "b"); // ?
add(2, "asdfa"); // ?
add({ age: 27 }, { age: 32 }); // ?

// unknown is safe
// just safe enough

const addSafe = (a: unknown, b: unknown): number => {
  // This wouldn't compile:
  // return a + b;

  // So we have to check the types do what we want:
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Cannot add a and b");
};
addSafe(2, 3); // ?

export {};
