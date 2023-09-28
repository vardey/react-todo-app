import { TABS } from "../const";
import DeleteIcon from '@mui/icons-material/Delete';

const TasksList = (props) => {
  const { tasksList, deleteTaskById, updateTask, currentTab } = props;

  const filteredTasksList = tasksList.filter((task) => {
    if (currentTab === TABS.COMPLETED && task.isCompleted) {
      return task;
    } else if (currentTab === TABS.ACTIVE && !task.isCompleted) {
      return task;
    } else if (currentTab === TABS.ALL) {
      return task;
    }
    return false;
  });

  console.log({ filteredTasksList, tasksList, currentTab });
  return (
    <div id="tasksList">
      {filteredTasksList.map((task, index) => {
        return (
          task && (
            <div style={{display:"flex"}}
              className={
                task.isCompleted ? "listType_completed" : "listType_active"
              }
              id={`parent_` + task.id}
              key={index}
            >
              <input
                onChange={(e) => {
                  console.log("checkbox clicked", e.target.checked);
                  updateTask({ ...task, isCompleted: e.target.checked });
                  // setTaskCompleteById(parseInt(e.currentTarget.id, 10));
                }}
                type="checkbox"
                checked={task.isCompleted}
                id={task.id}
              />
              <label style={{flex:1}}
                id={
                  task.isCompleted
                    ? "label_completed_" + task.id
                    : "label_active_" + task.id
                }
                htmlFor={task.id}
              >
                {task.isCompleted ? <del>{task.content}</del> : task.content}
              </label>

              {task.isCompleted && currentTab === TABS.COMPLETED && (
               <DeleteIcon onClick={()=>deleteTaskById(task.id)}/>
              )}
            </div>
          )
        );
      })}
    </div>
  );
};

export default TasksList;
