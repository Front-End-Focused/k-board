import TasksList from "../Tasks/TasksList";

function TestingColumn() {
  return (
    <div className="col-md-3">
      <div className="row mb-3">
        <div className="col-6">
          <strong>Testing</strong>
        </div>
        <div className="col-6 text-end">
          <span className="badge bg-warning">0</span>
        </div>
      </div>
      <div className="bg-warning bg-gradient bg-opacity-25 p-2">
        <TasksList />
      </div>
    </div>
  );
}

export default TestingColumn;
