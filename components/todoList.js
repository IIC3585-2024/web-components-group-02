// Código basado en https://www.youtube.com/watch?app=desktop&v=STZA_qtm1XU&ab_channel=AnujSingla

class TodoList extends HTMLElement{
  constructor(){
    super();
 
    const template = document.createElement('template');
    const listName = this.getAttribute('listName');
    const prompt = this.getAttribute('prompt');
    const firstItem = this.getAttribute('firstItem');
    const secondItem = this.getAttribute('secondItem');
    const thirdItem = this.getAttribute('thirdItem');
    template.innerHTML = `
    <style>
      #todo-list-div {
        width: 300px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #000;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        background-color: #f9f9f9;
      }

      h2 {
        font-family: 'Comic Sans MS';
        font-size: 15px;      
      }

      #inputBox {
        width: calc(100% - 20px);
        padding: 10px;
        margin-right: 10px;
        border: 1px solid #000;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      
      #addButton {
        display: block;
        width: 100%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      #addButton:hover {
        background-color: #45a049;
      }
      
      #todoList {
        list-style-type: none;
        padding: 0;
      }

      li {
        font-family: Arial, sans-serif;
        background-color: #f1f1f1;
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
      }

      li button {
        background-color: #eb2626;
        color: white;
        border: none;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
      }
      
      li button:hover {
        background-color: #b01a1a;
        opacity: 0.8;
      }
    </style>


    <div id="todo-list-div">
      <h2>${listName}</h2>
      <input type="text" id="inputBox" placeholder="${prompt}"></input>
      <button id="addButton">Agregar</button>
      <ul id="todoList"></ul>
    </div>
    `
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));

    
    this.input = this.shadowRoot.querySelector('#inputBox');
    this.addButton = this.shadowRoot.querySelector('#addButton');
    this.todoList = this.shadowRoot.querySelector('#todoList');

    this.createItem(firstItem);
    this.createItem(secondItem);
    this.createItem(thirdItem);

    this.addButton.addEventListener('click', this.addItem.bind(this));
  }

  addItem(){
    const text = this.input.value;
    if(text){
      const item = document.createElement('li');
      item.textContent = text;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.addEventListener('click', () => {
        this.todoList.removeChild(item);
      });

      item.appendChild(deleteButton);
      this.todoList.appendChild(item);
      this.input.value = '';
    }
  }

  createItem(itemName){
    const item = document.createElement('li');
    item.textContent = itemName;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      this.todoList.removeChild(item);
    });

    item.appendChild(deleteButton);
    this.todoList.appendChild(item);
  }
}

customElements.define('todo-list', TodoList);
