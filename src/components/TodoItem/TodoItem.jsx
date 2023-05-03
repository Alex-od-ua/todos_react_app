const TodoItem = ({ id, text, completed, toggleTodoCompleted, removeTodo }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={() => toggleTodoCompleted(id)}></input>
      <p>{text}</p>
      <p className="deleteBtn" onClick={() => removeTodo(id)}>
        del
      </p>
    </li>
  );
};

export default TodoItem;
