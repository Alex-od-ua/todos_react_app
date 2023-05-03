import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/TodoItem";

const TodoList = (/*{ todos, toggleTodoCompleted, removeTodo }*/) => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const elements = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      /*toggleTodoCompleted={toggleTodoCompleted}*/
      /*removeTodo={removeTodo}*/
      {...todo}
    />
  ));

  return <ul>{elements}</ul>;
};

export default TodoList;
