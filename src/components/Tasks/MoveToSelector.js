function MoveToSelector({ onChange }) {
  return (
    <div className="row">
      <label
        htmlFor="colFormLabelSm"
        className="col-sm-4 col-form-label col-form-label-sm"
      >
        Move to
      </label>
      <div className="col-sm-8">
        <select
          className="form-select form-select-sm"
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="testing">Testing</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
}

export default MoveToSelector;
