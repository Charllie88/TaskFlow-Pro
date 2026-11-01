export const dashboardStats = [
  {
    title: "Tasks in progress",
    value: "12",
    change: "+2 this week",
    note: "Across all your projects",
    icon: "tasks",
    tone: "blue",
  },
  {
    title: "Completion rate",
    value: "78%",
    change: "+8.4%",
    note: "Compared to last month",
    icon: "progress",
    tone: "green",
  },
  {
    title: "Active projects",
    value: "6",
    change: "On track",
    note: "2 due this month",
    icon: "projects",
    tone: "purple",
  },
  {
    title: "Tasks completed",
    value: "24",
    change: "+5 this week",
    note: "You're on a roll",
    icon: "completed",
    tone: "orange",
  },
];

export const tasks = [
  {
    id: "brand-guidelines",
    title: "Finalize brand guidelines",
    description: "Review the updated color palette and typography with the team.",
    project: "Website redesign",
    projectTone: "violet",
    dueDate: "Today",
    priority: "high",
    priorityLabel: "High",
    assignees: [
      { initials: "AM", tone: "profile" },
      { initials: "JL", tone: "rose" },
    ],
  },
  {
    id: "user-interviews",
    title: "Prepare user interview questions",
    description: "Draft a focused set of questions for the upcoming research sessions.",
    project: "Product research",
    projectTone: "blue",
    dueDate: "Tomorrow",
    priority: "medium",
    priorityLabel: "Medium",
    assignees: [
      { initials: "AM", tone: "profile" },
      { initials: "SK", tone: "gold" },
    ],
  },
  {
    id: "homepage-mockups",
    title: "Share homepage mockups",
    description: "Send the latest desktop and mobile concepts for stakeholder review.",
    project: "Website redesign",
    projectTone: "violet",
    dueDate: "Nov 4",
    priority: "low",
    priorityLabel: "Low",
    assignees: [
      { initials: "JL", tone: "rose" },
      { initials: "AM", tone: "profile" },
    ],
  },
];
