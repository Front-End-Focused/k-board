import TasksList from "../Tasks/TasksList";

function DoneColumn() {
  return (
    <div className="col-md-3">
      <div className="row mb-3">
        <div className="col-6">
          <strong>Done</strong>
        </div>
        <div className="col-6 text-end">
          <span className="badge bg-success">0</span>
        </div>
      </div>
      <div className="bg-success bg-gradient bg-opacity-25 p-2">
        <TasksList />
      </div>
    </div>
  );
}

export default DoneColumn;
