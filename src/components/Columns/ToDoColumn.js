import { useSelector } from "react-redux";
import TasksList from "../Tasks/TasksList";
import { findByColumn } from "../../utils";

function ToDoColumn() {
  const tasks = findByColumn(
    useSelector((state) => state.tasks),
    "todo"
  );

  return (
    <div className="col-md-3">
      <div className="row mb-3">
        <div className="col-6">
          <strong>To Do</strong>
        </div>
        <div className="col-6 text-end">
          <span className="badge bg-secondary">{tasks.length}</span>
        </div>
      </div>
      <div className="bg-secondary bg-gradient bg-opacity-25 p-2">
        <TasksList tasks={tasks} />
      </div>
    </div>
  );
}

export default ToDoColumn;
