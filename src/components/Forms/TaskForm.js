import { useDispatch } from "react-redux";
import { tasksAdd } from "../../store/actions";

function TaskForm() {
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    dispatch(
      tasksAdd({
        title: formData.get("title"),
        assignee: formData.get("assignee"),
      })
    );
  }

  return (
    <form
      autoComplete="off"
      className="row row-jc mt-5 mb-5"
      onSubmit={onSubmit}
    >
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Task"
          aria-label="Task"
          autoComplete="off"
          name="title"
        />
      </div>
      <div className="col-md-2">
        <input
          type="text"
          className="form-control"
          placeholder="Assignee"
          aria-label="Assignee"
          autoComplete="off"
          name="assignee"
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
