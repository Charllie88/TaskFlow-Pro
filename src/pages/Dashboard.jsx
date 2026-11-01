import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import StatCard from "../components/StatCard.jsx";
import TaskCard from "../components/TaskCard.jsx";
import { dashboardStats, tasks } from "../data/tasks.js";

const statIcons = {
  tasks: (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M8 6h12M8 12h12M8 18h12M3.5 6h.01M3.5 12h.01M3.5 18h.01" strokeLinecap="round" />
    </svg>
  ),
  progress: (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M4 19V5m0 14h16" strokeLinecap="round" />
      <path d="m7 15 4-4 3 2 5-6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7h3v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  projects: (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M3.5 7A1.5 1.5 0 0 1 5 5.5h5l2 2h7A1.5 1.5 0 0 1 20.5 9v9a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18z" strokeLinejoin="round" />
    </svg>
  ),
  completed: (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8 12 2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content" id="dashboard">
        <Header />
        <div className="dashboard">
          <section className="welcome-section" aria-labelledby="welcome-title">
            <div>
              <p className="eyebrow">Sunday, November 1, 2026</p>
              <h1 id="welcome-title">Good morning, Alex <span aria-hidden="true">✦</span></h1>
              <p className="welcome-section__subtitle">
                Here&apos;s what&apos;s happening with your work today.
              </p>
            </div>
            <button className="primary-button" type="button">
              <span aria-hidden="true">+</span>
              Create new task
            </button>
          </section>

          <section className="stats-grid" aria-label="Workspace overview">
            {dashboardStats.map((stat) => (
              <StatCard
                change={stat.change}
                icon={statIcons[stat.icon]}
                key={stat.title}
                note={stat.note}
                title={stat.title}
                tone={stat.tone}
                value={stat.value}
              />
            ))}
          </section>

          <section className="tasks-section" id="my-tasks" aria-labelledby="tasks-title">
            <div className="section-heading">
              <div>
                <h2 id="tasks-title">Your tasks</h2>
                <p>A little progress each day adds up.</p>
              </div>
              <a className="text-link" href="#my-tasks">
                View all tasks
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="task-list">
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </section>

          <footer className="dashboard-footer">
            <span>You&apos;re doing great. Keep the momentum going.</span>
            <span>Last synced just now</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
