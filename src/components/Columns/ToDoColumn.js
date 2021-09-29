import { useSelector } from "react-redux";
import TasksList from "../Tasks/TasksList";

function ToDoColumn() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="col-md-3">
      <div className="row mb-3">
        <div className="col-6">
          <strong>To Do</strong>
        </div>
        <div className="col-6 text-end">
          <span className="badge bg-secondary">0</span>
        </div>
      </div>
      <div className="bg-secondary bg-gradient bg-opacity-25 p-2">
        <TasksList tasks={tasks} />
      </div>
    </div>
  );
}

export default ToDoColumn;
