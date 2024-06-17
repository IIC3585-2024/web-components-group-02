import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class LitTodoList extends LitElement {
  static get properties() {
    return {
      input: { type: String },
      addButton: { type: String },
      todoList: {},
      listName: { type: String },
      prompt: { type: String },
      firstItem: {},
      secondItem: {},
      thirdItem: {}
    }
  }

  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
  }

  static styles = css`
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
  `

  firstUpdated(){
    this.input = this.renderRoot.querySelector('#inputBox');
    this.addButton = this.renderRoot.querySelector('#addButton');
    this.todoList = this.renderRoot.querySelector('#todoList');
    this.createItem(this.firstItem);
    this.createItem(this.secondItem);
    this.createItem(this.thirdItem);

    this.addButton.addEventListener('click', this.addItem);
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

  render(){
    return html`
    <div id="todo-list-div">
      <h2>${this.listName}</h2>
      <input type="text" id="inputBox" placeholder=${this.prompt}></input>
      <button id="addButton">Agregar</button>
      <ul id="todoList"></ul>
    </div>
    `
  }
}

customElements.define('lit-todo-list', LitTodoList);