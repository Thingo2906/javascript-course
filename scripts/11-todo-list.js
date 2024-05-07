let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
displayTodo();
function displayTodo(){
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
  
    const html = `
      <div>${name}</div>
      <div> ${dueDate}</div>
      <button class ="delete-button"onclick="
            todoList.splice(${i}, 1);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            displayTodo();
      ">Delete</button>
      </div>
    `;
    todoListHTML += html;
  }
  document.querySelector('.todo-list').innerHTML = todoListHTML;

}


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