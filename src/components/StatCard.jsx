import React from "react";

function StatCard({ title, value, change, note, icon, tone }) {
  return (
    <article className="stat-card" aria-label={`${title}: ${value}`}>
      <div className="stat-card__top">
        <span className={`stat-card__icon stat-card__icon--${tone}`} aria-hidden="true">
          {icon}
        </span>
        <span className="stat-card__change">{change}</span>
      </div>
      <p className="stat-card__title">{title}</p>
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__note">{note}</p>
    </article>
  );
}

export default StatCard;
