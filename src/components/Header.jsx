import React from "react";

function Header() {
  return (
    <header className="topbar">
      <label className="search-field">
        <svg
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
        <span className="visually-hidden">Search your workspace</span>
        <input aria-label="Search your workspace" placeholder="Search anything..." type="search" />
        <kbd aria-hidden="true">⌘ K</kbd>
      </label>

      <div className="topbar__actions">
        <button className="icon-button notification-button" type="button" aria-label="Notifications">
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
            viewBox="0 0 24 24"
          >
            <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>
          <span className="notification-button__dot" aria-hidden="true" />
        </button>
        <span className="topbar__divider" aria-hidden="true" />
        <button className="profile-button" type="button" aria-label="Account: Alex Morgan">
          <span className="avatar avatar--profile" aria-hidden="true">AM</span>
          <span className="profile-button__name">Alex Morgan</span>
          <svg aria-hidden="true" className="profile-button__chevron" viewBox="0 0 16 16">
            <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
