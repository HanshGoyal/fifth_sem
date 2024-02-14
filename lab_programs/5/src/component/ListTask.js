import "../CSS/mystyle.css";
const ListTask = ({ tasks, setTasks }) => {
  function DeleteItem(id) {
    setTasks(tasks.filter((task) => id !== task.id));
  }
  return (
    <div className="myDiv">
      <h1>Task List</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.id}-{task.name}
            </span>
            <button onClick={() => DeleteItem(task.id)} className="button1">
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
