/* =========================================================
   06 - Error Handling
========================================================= */

interface User {
  url: string;
  followers: number;
  // ...
}

// Try, catch

const fetchFollowerCount = async (
  username: string
): Promise<number> => {
  try {
    const response = await fetch(
      `https://api.github.com/v3/user/${username}`
    );
    const data = await (response.json() as Promise<User>);
    const { followers } = data;
    return followers;
  } catch (err) {
    throw new Error("failed to fetch user");
  }
};

// .catch()

fetchFollowerCount("asdfagaweggawekghawghasgha")
  .then(doSomething)
  .catch(err => {
    handleErr(err);
  });

// Java-style error handling -------------------------------

// - You can return errors, forcing you to handle them, like
//   in Java

// Ignore below this line-----------------------------------

export {};
