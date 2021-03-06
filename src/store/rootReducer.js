import * as actions from "./actionsTypes";

const initialState = {
  tasks: [],
  gif: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.TASKS_ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case actions.TASKS_UPDATE_STATUS:
      const { id, value } = action.payload;

      const newTask = state.tasks.find((task) => task.id === id);
      const newState = state.tasks.filter((task) => task.id !== id);
      newTask.column = value;

      return {
        ...state,
        tasks: [...newState, newTask],
      };
    case actions.TASKS_GIF:
      return {
        ...state,
        gif: action.payload.gif,
      };
    default:
      return state;
  }
}
