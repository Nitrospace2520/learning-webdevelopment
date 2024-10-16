/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../api/apiSlice";

const TodoCard = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleToggle = () => {
    updateTodo({
      id: todo.id,
      userId: todo.userId,
      title: todo.title,
      completed: !todo.completed,
    });
  };
  const handleDelete = () => {
    deleteTodo({ id: todo.id });
  };
  return (
    <tr
      style={{
        background: "#000",
        border: "2px soild #f00",
        padding: "2px",
        fontSize: "18px",
        color: "#fff",
      }}
    >
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggle()}
          style={{
            marginRight: "5px",
            border: "none",
            cursor: "pointer",
            width: "20px",
            height: "20px",
          }}
        />
      </td>
      <td>{todo.title}</td>
      <td>
        <button
          onClick={() => handleDelete()}
          style={{
            marginLeft: "5px",
            backgroundColor: "#500",
            color: "white",
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};
export default TodoCard;
