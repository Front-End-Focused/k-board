import * as actions from "./actionsTypes";
import { getUniqueID } from "../utils";

export function tasksAdd({ title, assignee, column = "todo" }) {
  return {
    type: actions.TASKS_ADD,
    payload: {
      id: getUniqueID(),
      title,
      assignee,
      column,
    },
  };
}

export function tasksUpdateStatus({ id, value }) {
  return {
    type: actions.TASKS_UPDATE_STATUS,
    payload: {
      id,
      value,
    },
  };
}

export function tasksGif({ gif }) {
  return {
    type: actions.TASKS_GIF,
    payload: { gif },
  };
}
