import { useDispatch } from "react-redux";
import { tasksUpdateStatus } from "../../store/actions";
import MoveToSelector from "./MoveToSelector";

function TaskCard({ title, id }) {
  const dispatch = useDispatch();
  function onChangeHandler(value) {
    if (!value) return;
    dispatch(
      tasksUpdateStatus({
        id,
        value,
      })
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <MoveToSelector onChange={onChangeHandler} />
      </div>
    </div>
  );
}

export default TaskCard;
