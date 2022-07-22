//retrieve data from local storage
function get_todos(){
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');
  if(todos_str !== null){
      todos = JSON.parse(todos_str);
  }
  return todos;
}

function add(){
  var task = document.getElementById('task').value;

  var todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();
  clearDefault();
  return false; //avoids any futher action with click event
}