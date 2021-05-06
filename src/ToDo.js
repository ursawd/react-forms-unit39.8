//--ToDo Component
import "./ToDo.css";

const ToDo = ({ id, task, completed, handleRemove, handleEdit }) => {
  const remove = () => handleRemove(id);
  const edit = () => handleEdit(id);

  return (
    <div>
      <button type="button" onClick={remove} className="btn">
        ❌
      </button>
      <button type="button" onClick={edit} className="btn">
        <b>🖊</b>
      </button>

      <h3 className="todo-item">{task}</h3>
    </div>
  );
};
export default ToDo;
