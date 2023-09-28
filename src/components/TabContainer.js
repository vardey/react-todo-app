import Header from "./Header";
import Tabs from "./Tabs";
import "./TabContainer.css";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import { useState } from "react";
import { ACTIONS, TABS } from "../const";

const TabContainer = (props) => {
  const {
    getTasksListFromLocalStorage,
    updateLocalStorageTasksList,
    getTaskIndexById,
  } = props;
  const [tasksList, setTasksList] = useState(
    getTasksListFromLocalStorage() || []
  );
  const [currentTab, setCurrentTab] = useState(TABS.ALL);

  const addTask = (task) => {
    console.log("addTask", task);
    const newTaskList = [...tasksList, task];
    setTasksList(newTaskList);
    updateLocalStorageTasksList(task, ACTIONS.ADD_ONE);
  };

  const deleteTaskById = (id) => {
    const index = getTaskIndexById(id, tasksList);
    const newTasksList = [...tasksList];
    newTasksList.splice(index, 1);
    setTasksList(newTasksList);
    updateLocalStorageTasksList({ id }, ACTIONS.DELETE_ONE);
  };

//   const deleteAllTasks = () => {
//     setTasksList([]);
//     updateLocalStorageTasksList({}, ACTIONS.DELETE_ALL);
//   };

  const updateTask = (task) => {
    console.log("updateTask", task);
    const index = getTaskIndexById(task.id, tasksList);
    const newTasksList = [...tasksList];
    newTasksList[index] = task;
    console.log("new tasks list", newTasksList);
    setTasksList(newTasksList);
    updateLocalStorageTasksList(task, ACTIONS.UPDATE_ONE);
  };

  const openTab = async(tabName) => {
    console.log(tabName)
    setCurrentTab(tabName);
  }

  return (
    <div className="tabContainer">
      <Header />
      <Tabs openTab={openTab} />
      <hr />
      <AddTask addTask={addTask} />
      <TasksList currentTab={currentTab} deleteTaskById={deleteTaskById} tasksList={tasksList} updateTask={updateTask}/>
    </div>
  );
};

export default TabContainer;
