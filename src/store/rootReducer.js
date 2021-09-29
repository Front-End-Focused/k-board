import { TASKS_ADD } from "./actionsTypes";

const initialState = {
  tasks: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TASKS_ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
}
