
let username = 'a';
let height = 'n';

let args = [
  username, 
  height, 
];


function clearFields(...args) {
  for (let arg of args) {
    console.log(arg)
  }
}

console.log(clearFields(args))