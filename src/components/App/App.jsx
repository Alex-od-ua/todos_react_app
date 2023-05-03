import { useState } from "react";
import { nanoid } from "nanoid";

import TodoList from "../TodoList/TodoList";
import InputForm from "../InputForm/InputForm";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([...todos, { id: nanoid(), text, completed: false }]);

      setText("");
    }
  };

  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  // const elements = todos.map((todo) => (
  //   <li key={todo.id}>
  //     <input
  //       type="checkbox"
  //       checked={todo.completed}
  //       onChange={() => toggleTodoCompleted(todo.id)}
  //     ></input>
  //     <p>{todo.text}</p>
  //     <p className="deleteBtn" onClick={() => removeTodo(todo.id)}>
  //       del
  //     </p>
  //   </li>
  // ));

  return (
    <div className="App">
      <InputForm text={text} handleInput={setText} handleSubmit={addTodo} />
      {/* <label>
        <input
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></input>
        <button onClick={addTodo}>Add Todo</button>
      </label> */}

      {/* <ul>{elements}</ul> */}
      <TodoList todos={todos} toggleTodoCompleted={toggleTodoCompleted} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
