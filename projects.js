/**
 * projects.js — Portfolio data file
 *
 * To add a new project, copy the object below and paste it into the array.
 * The portfolio page renders everything automatically — no HTML edits needed.
 *
 * Fields:
 *   title       (string)  — project name
 *   date        (string)  — e.g. "March 2026"
 *   tags        (array)   — tech stack labels
 *   description (string)  — 1–3 sentence summary
 *   github      (string|null) — repo URL, or null to hide button
 *   demo        (string|null) — live demo URL, or null to hide button
 */

const projects = [
  {
    title: "Full-Stack Urban Traffic Prediction Platform",
    date: "January 2026",
    tags: ["Python", "FastAPI", "scikit-learn", "Pandas", "NumPy", "JavaScript", "HTML/CSS"],
    description:
      "End-to-end ML traffic prediction system with feature engineering, cross-validated model training (MAE, RMSE, R²), and a production-ready FastAPI service delivering real-time, interpretable predictions.",
    github: "https://github.com/NabilKendri/City-Traffic-Prediction-Model",
    demo: null
  },
  {
    title: "Tariff Management System",
    date: "April 2025",
    tags: ["Java", "OOP", "Data Structures", "File I/O"],
    description:
      "Java-based tariff management system using File I/O to parse trade data, apply business rules, and generate structured outputs — built with custom OOP design patterns as a COMP 249 final assignment.",
    github: null,
    demo: null
  }
  // ↓ Add your next project here:
  // {
  //   title: "My New Project",
  //   date: "Month Year",
  //   tags: ["Tag1", "Tag2"],
  //   description: "Short description of what it does and why it matters.",
  //   github: "https://github.com/NabilKendri/repo-name",
  //   demo: null
  // },
];
