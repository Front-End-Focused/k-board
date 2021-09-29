function TaskCard({ title }) {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
      </div>
    </div>
  );
}

export default TaskCard;
