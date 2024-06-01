let input = prompt("What would you like todo?")
const todos = ["Wake up", "Take Shit", "Get out of bed", "Cum"]

while (input !== 'quit' && input !== 'q') {

    if (input === "list") {
        for (let i = 0; i < todos.length; i++) {
            console.log(todos[i]);
        }
    } else if (input === 'new') {
        const newTodo = prompt('What will you add?')
        todos.push(newTodo);

    } else if (input === 'delete') {
        const index = parseInt(prompt("Ok enter and index to delete:"))

        if (!Number.isNaN(index)) {
            const deletedTodos = todos.splice(index, 1);
            console.log(`OK , deleted ${deletedTodos[0]}`)
        } else {
            console.log("Invalid index")
        }
    }

    input = prompt("But you want to do something!")
}
console.log("CYA")