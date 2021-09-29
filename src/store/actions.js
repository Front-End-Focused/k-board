import { TASKS_ADD } from "./actionsTypes";
import { getUniqueID } from "../utils";

export function tasksAdd({ title, assignee, column = "todo" }) {
  return {
    type: TASKS_ADD,
    payload: {
      id: getUniqueID(),
      title,
      assignee,
      column,
    },
  };
}
