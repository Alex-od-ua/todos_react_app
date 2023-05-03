import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../../Redux/todo/todo-slice";

const TodoItem = ({ id, text, completed /*toggleTodoCompleted, removeTodo*/ }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted({ id }))}
      ></input>
      <p>{text}</p>
      <p className="deleteBtn" onClick={() => dispatch(removeTodo({ id }))}>
        del
      </p>
    </li>
  );
};

export default TodoItem;
