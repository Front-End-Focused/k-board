// Styles
const consoleGroupLabelColor = "color: grey;";
const consoleGroupTitleColor = "color: black;";

const prevStateColor = [
  "background-color: #ffebe9;",
  "color: #82071e;",
  "font-weight: bold;",
];

const nextStateColor = [
  "background-color: #dafbe1;",
  "color: #116329;",
  "font-weight: bold;",
];

const actionColor = [
  "background-color: #f6f8fa;",
  "color: #2768da;",
  "font-weight: bold;",
];

const logger = (store) => (next) => (action) => {
  console.group(
    `%c action %c ${action.type}`,
    consoleGroupLabelColor,
    consoleGroupTitleColor
  );

  console.log("%c prev state ", prevStateColor.join(""), store.getState());

  const nextAction = next(action);

  console.log("%c action ", actionColor.join(""), action);

  console.log("%c next state ", nextStateColor.join(""), store.getState());

  console.groupEnd();

  return nextAction;
};

export default logger;
