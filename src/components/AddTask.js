import { useState } from "react";

const AddTask = (props) => {
  const [taskContent, setTaskContent] = useState("");

  const captureTaskContent = (e) => {
    console.log(e.target.value);
    setTaskContent(e.target.value);
  };

  return (
    <div className="textInput">
      <input
        type="text"
        id="addTaskInput"
        value={taskContent}
        required={true}
        onChange={captureTaskContent}
      />
      <button
        onClick={() => {
          if (!taskContent) {
            alert("Please enter a task!");
            return;
          }
          props.addTask({
            id: Date.now(),
            content: taskContent,
            isCompleted: false,
          });
          setTaskContent("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
