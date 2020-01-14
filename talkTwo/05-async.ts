/* =========================================================
   05 - Asynchronous Programming
========================================================= */

// Callbacks -----------------------------------------------

// - The first and simplest way to do async programming in
//   JS was to use callbacks
// - Passing functions to other functions is very common in
//   TS/JS

type Operator = (n: number, m: number) => number;

const multiply: Operator = (n, m) => n * m;

function performOperation(
  operation: Operator,
  argOne: number,
  argTwo: number
) {
  return operation(argOne, argTwo);
}
performOperation(multiply, 2, 4); // 8

// This pattern is used by a lot of libraries to handle
// asynchronous code
$.getJSON({
  url: `https://api.github.com/users/${id}`,
  success: updateUI, // some funciton to be called later
  error: showError // some function to be called later
});

// Promises ------------------------------------------------

// - Promises give a more convenient way to write async code
// - They have almost entirely replaced callbacks
// - Promises have 3 states: pending, fulfilled & rejected

interface User {
  url: string;
  followers: number;
  // ...
}

const fetchProfileUrl = (
  username: string
): Promise<string> => {
  return fetch(`https://api.github.com/v3/user/${username}`)
    .then(response => response.json() as Promise<User>)
    .then(data => data.url);
};

fetchProfileUrl("mulholio")
  .then(url => `James' profile url is: ${url}`)
  .then(msg => console.log(msg));

// Async/Await ---------------------------------------------

// - The `async` and `await` keywords give a more convenient
//   way of interacting with Promises

const fetchFollowerCount = async (
  username: string
): Promise<number> => {
  const response = await fetch(
    `https://api.github.com/v3/user/${username}`
  );
  const data = await (response.json() as Promise<User>);
  const { followers } = data;
  return followers;
};

(async function() {
  const followers: number = await fetchFollowerCount(
    "mulholio"
  );
  console.log("James has: ", followers);
})();

export {};
