const toDo = [];

let input = prompt("Add a command")

while (input !== 'quit' && input !== "q") {

  if (input == "new") {
    const element = prompt("What would you like to add to the todo list?");
    toDo.push(element);
    console.log(`${element} is added to the list`);
  } else if (input == "list") {
    console.log("***********************************");
    for (let i = 0; i < toDo.length; i++) {
      console.log(`${i}: ${toDo[i]}`);
    }
    console.log("***********************************");
  } else if (input == "delete") {
    // const element = prompt("What would you like to remove from the todo list?");
    // toDo.pop(element);
    const index = parseInt(prompt("Enter index of the element you would like to delete"));
    if (!Number.isNaN(index)) {
      const deleted = toDo.splice(index, 1);
      console.log(`${deleted} is deleted from the list`);
    } else {
      console.log("Unknown index")
    }

  }
  input = prompt("Add a command");
}
console.log("OK QUIT THE APP");