Vue.createApp({
  data() {
    return {
      currentFilter: "",
      newTodo: "",
      todos: [{}],
      fetchAdress: "http://localhost:4730/todos",
      styleTodoItemUl: {
        class: "todo-list",
      },
      styleTodoItemLi: {
        class: "todo-item",
      },
      styleTodoItemLabel: {
        class: "todo-item__text",
      },
      styleTodoItemCheckbox: {
        class: "todo-item__checkbox",
      },
      linethrough: false,
      agree: false,
      // fResponse: "",
    };
  },
  beforeCreate() {
    // const fResponse = fetch(this.fetchAdress);
  },
  created() {
    const fResponse = fetch(this.fetchAdress);
    fResponse
      .then((response) => response.json())
      .then((jsonData) => (this.todos = jsonData));
  },
  methods: {
    filterElements() {
      return this.todos.filter((todo) => {
        if (this.currentFilter === "done") {
          return todo.done === true;
        } else if (this.currentFilter === "open") {
          return todo.done === false;
        } else {
          return true;
        }
      });
    },
    addNewTodo() {
      const newTodos = {
        description: this.newTodo,
        done: false,
      };
      fetch(this.fetchAdress, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTodos),
      })
        .then((response) => response.json())
        .then(() => {});
      // this.todos.push(newTodos);
      this.newTodo = "";
    },
    isChecked() {
      if ((this.agree = true)) {
        this.linethrough = true;
        console.log("Huhu");
      } else if ((this.agree = false)) {
        this.linethrough = false;
        console.log("Nänä", this.linethrough);
      }
      // this.todo.done === true;
    },
  },
}).mount("#app");
