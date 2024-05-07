let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
displayTodo();
function displayTodo(){
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
     const {name, dueDate} = todoObject;
  
     const html = `
      <div>${name}</div>
      <div> ${dueDate}</div>
      <button class ="delete-button" 
      >Delete</button>
      </div>
    `;
    todoListHTML += html;
  })
 
   
  document.querySelector('.todo-list').innerHTML = todoListHTML;

  // we have many delete button for list of todo
  document.querySelectorAll('.delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        displayTodo();

    })

  })
}

document.querySelector('.add-button').addEventListener('click', () => {
  addTodo();
})

function addTodo(){
  const inputElement = document.querySelector('.name-input');
  const dateInput = document.querySelector('.date-input')
  //create a todo object
  const name = inputElement.value;
  const dueDate = dateInput.value;
  // a shortcut of object, if the the property have the sam name with it value
  const todo = {
    //name: name ,
    //dueDate: dueDate
    name,
    dueDate
  }
  todoList.push(todo);
  localStorage.setItem('todoList', JSON.stringify(todoList))
  inputElement.value = '';

 
  displayTodo();
  
}