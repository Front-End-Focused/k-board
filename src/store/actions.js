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

export const tasksFeedback = (value) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/54de1035-dd36-4067-a8eb-acf2e8b979ce"
    );
    const data = await response.json();
    dispatch(tasksGif({ gif: data.status[value] }));
    setTimeout(() => {
      dispatch(tasksGif({ gif: null }));
    }, 2000);
  } catch (error) {
    console.log(error);
  }
};
