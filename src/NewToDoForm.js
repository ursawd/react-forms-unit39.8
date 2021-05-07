//Add new ToDo form component
//
import { useState } from "react";
import "./NewToDoForm.css";
//------------------------------------------------------------
const NewToDoForm = ({ addToDo }) => {
  //------------------------------------------------------------
  const INITIAL_STATE = { task: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (formData.task === "") return;
    addToDo({ ...formData });
    setFormData(INITIAL_STATE);
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="Text"
        value={formData.task}
        name="task"
        id="task"
        placeholder="Enter new ToDo here..."
      />
      <button className="input-btn" type="submit">
        Add New ToDo
      </button>
    </form>
  );
};
export default NewToDoForm;
