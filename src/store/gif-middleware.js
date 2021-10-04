import { TASKS_UPDATE_STATUS } from "./actionsTypes";
import { tasksGif } from "./actions";

const gifMiddleware = (store) => (next) => (action) => {
  const nextAction = next(action);
  /**
   * 1. fetch gif
   * 2. dispatch gif action
   * 3. display gif
   * 4. remove gif after 1.5 second
   */
  if (action.type === TASKS_UPDATE_STATUS) {
    fetch("https://run.mocky.io/v3/54de1035-dd36-4067-a8eb-acf2e8b979ce")
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(tasksGif({ gif: data.status[action.payload.value] }));
        setTimeout(() => {
          store.dispatch(tasksGif({ gif: null }));
        }, 2000);
      })
      .catch((error) => console.log(error));
  }

  return nextAction;
};

export default gifMiddleware;
