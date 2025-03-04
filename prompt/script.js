// get user input using prompt

let userName = prompt("Enter your name:");
let userNameNospace = userName.trim();
if (userName) {
  console.log(userNameNospace);
} else {
  console.log("you didn't enter your name");
}

console.log(typeof userName);
console.log(userNameNospace.length);
