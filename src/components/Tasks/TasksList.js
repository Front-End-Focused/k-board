import { getRandomEmoji } from "../../utils";
import TaskCard from "./TaskCard";

function TasksList({ tasks }) {
  return tasks && tasks.length
    ? tasks.map((task) => <TaskCard key={task.id} {...task} />)
    : getRandomEmoji();
}

export default TasksList;
