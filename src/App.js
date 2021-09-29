import DoneColumn from "./components/Columns/DoneColumn";
import InProgressColumn from "./components/Columns/InProgressColumn";
import TestingColumn from "./components/Columns/TestingColumn";
import ToDoColumn from "./components/Columns/ToDoColumn";
import TaskForm from "./components/Forms/TaskForm";

function App() {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 text-center mt-5">
            <h1>K Board</h1>
            <TaskForm />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <ToDoColumn />
          <InProgressColumn />
          <TestingColumn />
          <DoneColumn />
        </div>
      </div>
    </>
  );
}

export default App;
