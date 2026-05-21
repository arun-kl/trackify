import React from "react";

function TaskList({ tasks, deleteTask, toggleComplete }) {

  return (

    <div className="task-list">

      <h2>Your Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks added</p>
      ) : (

        tasks.map((task) => (

          <div className="task-card" key={task.id}>

            <span
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {task.text}
            </span>

            <div>

              <button
                onClick={() => toggleComplete(task.id)}
              >
                Complete
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default TaskList;