
const inputEl = document.getElementById('input');
const tiltleEl = document.getElementById('title');
const listEl = document.getElementById('list');
const checkBoxEl = document.getElementById('checkBox');
const removeEl = document.getElementById('close');

var data=[]


inputEl.addEventListener("keydown", function(event) { //Create 1 event input from 1 key keyboard
    if (event.keyCode === 13) { // 13 is the key code for the Enter key .
      var id = event.target.value;
      // console.log(id);
      const inputList = document.createElement('li');    //Create a new element named "li"
      const newTodo = document.createTextNode(inputEl.value); //Create a text with the specified content, the content is taken according to the value of the part from input
      const checkBox = document.createElement('span') // Create a new element named "span"
      checkBox.classList.add('bx', 'bx-square' , 'cursor-pointer');
      checkBox.addEventListener('click', () =>{ //Tạo 1 sự kiện để click vào đối tượng checkBox
        if(checkBox.classList.contains('bx-square')){ // Check if there is class "bx-square", if so it is inactive state
        checkBox.classList.replace('bx-square','bx-check-square'); // Nếu lớp đó ở trạng thái "bx-square" thì đổi thành trạng thái "bx-check-square"

        } else {
          checkBox.classList.replace('bx-check-square', 'bx-square') // If the layer is in "bx-check-square" state (i.e. active) it will change back to "bx-square' state
        } 
      });

      const remove = document.createElement('span');
      remove.classList.add('bx', 'bx-x', 'bx-md', 'cursor-pointer', 'float-right')
      remove.addEventListener('click' ,() =>{
        inputList.remove();
      })
      inputList.appendChild(checkBox);
      inputList.appendChild(newTodo);                      
      inputList.appendChild(remove);
      inputList.classList.add ='li class=" border-b-[2px] border-solid px-[60px] py-[16px] bor-border float" '
      list.append(inputList);
      input.value ='';
    }
  });


  async function App() {
    const LINK_TODOS_URL = ('https://64106f4945a5f98532465c4f.mockapi.io')
    const inputEl = document.getElementById('input');
    const listEl = document.getElementById('list');
    const countEl = document.getElementById('count');
    let todos = []; 
  }


  const fetchTodos = async () => {
    try {
      const res = await fetch(`${LINK_TODOS_URL}/todosInfor`) 
      const data = await res.json();
      return data;
      console.log(data);
    }
    catch(error) {
      // console.error(error)
    }
  }
  const createTodo = async (value, completed) => {
    try {
      const res = await fetch(`${LINK_TODOS_URL}/todosInfor`, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(value, completed)
      } )
      const data = await res.json();
      return data;
    }
    catch(error) {
      // console.error(error)
    }
  }
  

  async function addTodo() {

    const newTodo = await createTodo({ value: inputEl.value, completed: false });
    todos.push(newTodo);
    const todoEl = createTodoItemEl(newTodo);
    listEl.appendChild(todoEl);
    // Clear the input value to prepare for the next todo.
    inputEl.value = '';
    updateCount();
    // saveTodos();
  } 

  async function removeTodo(el) {
    await fetch(`${LINK_TODOS_URL}/todosInfor/${el.dataset.id}`, {
      method: 'DELETE',
    });
    todos = todos.filter((todo) => todo.id !== el.dataset.id);
  // Dispatch a `save` event on the parent `listEl` element to save the latest state to localStorage.
    listEl.dispatchEvent(new CustomEvent('save'));
    el.remove();
    updateCount();
    // saveTodos();
  }

  
  

  function updateCount() {
    //Use the filter method to create a new array with all the incomplete todos.
    const count = todos.filter((todo) => !todo.completed).length;  //Get the length of this new array and assign it to the count variable.
    countEl.textContent = `${count} item${count !== 1 ? 's' : ''} left`; //Update the text content of the countEl element to display the count variable followed by the string "item" or "items" depending on whether count is equal to 1 or not.
    // saveTodos();
  }

  inputEl.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      addTodo();
    }
  });

  const getURLHash = () => document.location.hash.replace(/^#\//, ''); //This is a JavaScript function that retrieves the current URL hash value and removes the "#/" prefix if it exists

  function renderTodos() {
    const filter = getURLHash();
    let filterTodos = [...todos];             // declares a variable filterTodos and initializes it to a copy of the todos array using the spread operator.
    //check the value of the filter variable and filter the filterTodos array accordingly
    if (filter === 'active') filterTodos = todos.filter((todo) => !todo.completed);        //If the filter is active, the filterTodos array is filtered to only include items that are not completed.
    else if (filter === 'completed') filterTodos = todos.filter((todo) => todo.completed); //If the filter is completed, the filterTodos array is filtered to only include items that are completed.
    listEl.replaceChildren(...filterTodos.map((todo) => createTodoItemEl(todo)));      //uses the replaceChildren() method to replace the current child nodes of the listEl element with new child nodes created from the filterTodos array,using the map() method, and passes each element to the createTodoItemEl() function to create a new todo item element.
    document.querySelectorAll(`[data-todo="filters"] a`).forEach((el) => {  //selects all the a elements that are descendants of elements with a data-todo attribute value of filters
      if (el.matches(`[href="#/${filter}"]`)) {
        el.classList.add('checked');
      } else {
        el.classList.remove('checked');
      }
    });
  }

 

  // loadTodos();
  renderTodos();
  fetchTodos();
  
  
  App();