function TaskForm() {
  return (
    <form autoComplete="off" className="row row-jc mt-5 mb-5">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Task"
          aria-label="Task"
          autoComplete="off"
        />
      </div>
      <div className="col-md-2">
        <input
          type="text"
          className="form-control"
          placeholder="Assignee"
          aria-label="Assignee"
          autoComplete="off"
        />
      </div>
      <div className="col-md-2">
        <button className="btn btn-outline-dark" type="submit">
          &#43; Add new task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
