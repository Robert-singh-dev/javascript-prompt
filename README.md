# User Input Script

This is a simple JavaScript script that prompts the user to enter their name, trims any extra spaces, and logs the result to the console.

## How It Works

- The user is asked to enter their name using `prompt()`.
- The script removes any leading or trailing spaces from the input using `trim()`.
- If the user provides a name, the trimmed name is logged to the console.
- If the user leaves the input empty or cancels the prompt, a message is shown indicating that no name was entered.
- The script also logs the **type of the input** and the **length of the trimmed name** for additional debugging.

## Code Example

```javascript
let userName = prompt("Enter your name:");
let userNameNospace = userName.trim();
if (userName) {
  console.log(userNameNospace);
} else {
  console.log("you didn't enter your name");
}

console.log(typeof userName);
console.log(userNameNospace.length);
