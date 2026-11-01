import React from "react";

function TaskCard({ task }) {
  return (
    <article className="task-card" aria-labelledby={`task-${task.id}`}>
      <span className={`task-card__marker task-card__marker--${task.priority}`} aria-hidden="true" />
      <div className="task-card__content">
        <div className="task-card__heading">
          <h3 id={`task-${task.id}`} className="task-card__title">
            {task.title}
          </h3>
          <span className={`priority priority--${task.priority}`}>
            {task.priorityLabel}
          </span>
        </div>
        <p className="task-card__description">{task.description}</p>
        <div className="task-card__meta">
          <span className="task-card__project">
            <span className={`project-dot project-dot--${task.projectTone}`} aria-hidden="true" />
            {task.project}
          </span>
          <span className="task-card__due">
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="6" />
              <path d="M8 4.5V8l2.2 1.4" />
            </svg>
            {task.dueDate}
          </span>
          <div className="task-card__assignees" aria-label={`Assigned to ${task.assignees.join(", ")}`}>
            {task.assignees.map((person) => (
              <span
                aria-hidden="true"
                className={`avatar avatar--${person.tone}`}
                key={person.initials}
              >
                {person.initials}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button className="task-card__menu" type="button" aria-label={`More options for ${task.title}`}>
        <span aria-hidden="true">···</span>
      </button>
    </article>
  );
}

export default TaskCard;
