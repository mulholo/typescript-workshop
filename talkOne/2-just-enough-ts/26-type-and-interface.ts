// We can save variables to `type`
type Department =
  | "engineering"
  | "marketing"
  | "operations"
  | "data"
  | "QA";
const department: Department = "QA";

// We can alias types
type Name = string;
const name: Name = "Alice";

// We can define reusable interfaces:
interface IUser {
  name: string;
  age: number;
}
function createUser(name: string, age: number): IUser {
  return {
    name,
    age
  };
}

// Types and Interfaces are pretty similar
type TypeUser = {
  name: string;
  age: number;
};
// const user: IUser = {
const user: TypeUser = {
  name: "Alice",
  age: 37
};

// Quokka ==================================================
department; // ?
name; // ?
user; // ?
createUser("alice", 37);

// Shh
export {};
