// Código basado en https://www.youtube.com/watch?app=desktop&v=STZA_qtm1XU&ab_channel=AnujSingla

class TodoList extends HTMLElement{
    constructor(){
        super();
        
    const template = document.createElement('template');
    template.innerHTML = `
    <div>
      <input type="text" id="inputBox" placeholder="Agrega una nueva tarea"></input>
      <button id="addButton">Agregar</button>
      <ul id="todoList"></ul>
    </div>
    `
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.input = this.shadowRoot.querySelector('#inputBox');
    this.addButton = this.shadowRoot.querySelector('#addButton');
    this.todoList = this.shadowRoot.querySelector('#todoList');

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
}

customElements.define('todo-list', TodoList);