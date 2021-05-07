//--ToDo Component
import "./ToDo.css";

const ToDo = ({ id, task, completed, handleRemove }) => {
  const remove = () => handleRemove(id);

  return (
    <div>
      <button type="button" onClick={remove} className="btn">
        ❌
      </button>

      <h3 className="todo-item">{task}</h3>
    </div>
  );
};
export default ToDo;
