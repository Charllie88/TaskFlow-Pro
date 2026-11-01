import React from "react";

const navigationItems = [
  { label: "Dashboard", href: "#dashboard", icon: "grid", active: true },
  { label: "My tasks", href: "#my-tasks", icon: "check" },
  { label: "Projects", href: "#projects", icon: "folder" },
  { label: "Calendar", href: "#calendar", icon: "calendar" },
];

function NavigationIcon({ name }) {
  const paths = {
    grid: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </>
    ),
    check: (
      <>
        <path d="M8 5H20" />
        <path d="M8 12H20" />
        <path d="M8 19H20" />
        <path d="m3 5 1 1 2-2" />
        <path d="m3 12 1 1 2-2" />
        <path d="m3 19 1 1 2-2" />
      </>
    ),
    folder: (
      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6H10l2 2h7.5A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z" />
    ),
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M7.5 3v4M16.5 3v4M3.5 10h17" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="sidebar__icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Main sidebar">
      <a className="brand" href="#dashboard" aria-label="TaskFlow Pro home">
        <span className="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d="M8 16.5 13.2 22 24 10"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </span>
        <span className="brand__name">
          TaskFlow<span> Pro</span>
        </span>
      </a>

      <nav className="sidebar__navigation" aria-label="Primary navigation">
        <p className="sidebar__label">Workspace</p>
        {navigationItems.map((item) => (
          <a
            aria-current={item.active ? "page" : undefined}
            className={`sidebar__link${item.active ? " is-active" : ""}`}
            href={item.href}
            key={item.label}
          >
            <NavigationIcon name={item.icon} />
            <span>{item.label}</span>
            {item.label === "My tasks" && (
              <span className="sidebar__count" aria-label="4 tasks">
                4
              </span>
            )}
          </a>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="workspace-card">
          <span className="workspace-card__avatar" aria-hidden="true">
            S
          </span>
          <span className="workspace-card__copy">
            <span className="workspace-card__name">Studio North</span>
            <span className="workspace-card__plan">Free workspace</span>
          </span>
          <span className="workspace-card__more" aria-hidden="true">
            ···
          </span>
        </div>
        <p className="sidebar__version">TaskFlow Pro <span>·</span> v1.0</p>
      </div>
    </aside>
  );
}

export default Sidebar;
