const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

const todos = JSON.parse(localStorage.getItem('todos'));
if(todos){
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(); 
});

function addTodo(todo){
    let todoEl = document.createElement("li");
    let todoText = input.value;
    let timeCreate = new Date();
    todoText += '<span>'+timeCreate.getDate()+'/'+(timeCreate.getMonth()+1)+'/'+timeCreate.getUTCFullYear()+'</span>';
    if(todo){
        todoText = todo.text;
    }
    if (todo && todo.completed) {
        todoEl.classList.add("completed");
    }
    todoEl.innerHTML = todoText;

    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle("completed");
        updateLS();
    });

    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        todoEl.remove();
        updateLS();
    });
    ul.appendChild(todoEl);
    input.value = '';
    updateLS();
}

function updateLS(){
    let arrTodo = document.querySelectorAll('li');
    let todos = [];
    if(arrTodo){
        arrTodo.forEach((todo) => {
            todos.push({
                text: todo.innerHTML,
                completed: todo.classList.contains("completed"),
            });
        });
    }
    localStorage.setItem('todos',JSON.stringify(todos));
}