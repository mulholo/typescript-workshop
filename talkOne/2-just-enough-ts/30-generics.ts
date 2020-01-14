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
