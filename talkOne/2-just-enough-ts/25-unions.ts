function createEmployee(
  name: string,
  // We can combine multiple types with a union
  department: "engineering" | "marketing" | "operations" | "data" | "QA"
) {
  return {
    name,
    department
  };
}

createEmployee("Bob", "operations"); // ?
