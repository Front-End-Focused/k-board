import { TASKS_ADD } from "./actionsTypes";
import { getUniqueID } from "../utils";

export function tasksAdd({ title, assignee }) {
  return {
    type: TASKS_ADD,
    payload: {
      id: getUniqueID(),
      title,
      assignee,
    },
  };
}
