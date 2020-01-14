// TODO extract the Person Interface

export const makePerson = (): {
  age: number;
  name: string;
  ocupation: string; // TODO extract ocupation string into a stirng union
} => {
  return {
    age,
    name,
    ocupation
  };
};

export const hirePerson = (
  person: Person,
  newRole: Ocupation
) => ({ ...person, ocupation: newRole });
