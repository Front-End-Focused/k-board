import TasksList from "../Tasks/TasksList";

function InProgressColumn() {
  return (
    <div className="col-md-3">
      <div className="row mb-3">
        <div className="col-6">
          <strong>In Progress</strong>
        </div>
        <div className="col-6 text-end">
          <span className="badge bg-primary">0</span>
        </div>
      </div>
      <div className="bg-primary bg-gradient bg-opacity-25 p-2">
        <TasksList />
      </div>
    </div>
  );
}

export default InProgressColumn;
