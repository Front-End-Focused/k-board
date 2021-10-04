import { TASKS_UPDATE_STATUS } from "./actionsTypes";
import { tasksFeedback } from "./actions";

const gifMiddleware = (store) => (next) => (action) => {
  const nextAction = next(action);
  /**
   * 1. fetch gif
   * 2. dispatch gif action
   * 3. display gif
   * 4. remove gif after 1.5 second
   */
  if (action.type === TASKS_UPDATE_STATUS) {
    store.dispatch(tasksFeedback(action.payload.value));
  }

  return nextAction;
};

export default gifMiddleware;
