import React from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo, updateTodo }) {
  return (
    <div
      contentEditable={todo.iscontentEditable ? "true" : "false"}
      className="todo"
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "",
      }}
    >
      {todo.text}
      <div>
        <button onClick={() => updateTodo(index)} contentEditable="false">
          Update
        </button>
        <button onClick={() => completeTodo(index)} contentEditable="false">
          Complete
        </button>
        <button onClick={() => removeTodo(index)} contentEditable="false">
          x
        </button>
      </div>
    </div>
  );
}



function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false,
      iscontentEditable: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
      iscontentEditable: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
      iscontentEditable: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = index => {
    const newTodos = [...todos];
    if ((newTodos[index].iscontentEditable === false)) {
      newTodos[index].iscontentEditable = true;
    } else { newTodos[index].iscontentEditable = false}
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import Header from "./components/Header";
// import ToDos from "./components/Todos";
// import NewTask from "./components/NewTask";
// import _tasks from "./_tasks";

// const App = () => {
//   const [tasks, updateTasks] = useState(_tasks);

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <NewTask addTodo={task => updateTasks([...tasks, task])} />
//         <hr />
//         <ToDos tasks={tasks} />
//       </div>
//     </>
//   );
// };

// export default App;
