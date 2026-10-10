/**
 * PROJECTS DATA FILE
 * -------------------
 * This file contains the list of genuine projects displayed on your portfolio.
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Copy the structure of an existing project object below.
 * 2. Paste it at the end of the `projects` array, separated by a comma.
 * 3. Fill in your project's details:
 *    - `id`: A unique number or string
 *    - `title`: The project name
 *    - `description`: A truthful, short description of what it does
 *    - `technologies`: An array of tech stack names, e.g. ["Python", "React"]
 *    - `status`: e.g. "Completed" or "In Progress"
 *    - `githubUrl`: Link to your genuine GitHub repo, or "" to hide the button
 *    - `liveUrl`: Link to your deployed project, or "" to hide the button
 * 
 * Note: If you leave `githubUrl` or `liveUrl` as an empty string (""),
 * the ProjectCard component will automatically hide those external buttons!
 */

export const projects = [
  {
    id: 1,
    title: "To-Do List Application",
    description: "A task-management application for adding and displaying tasks.",
    status: "In Progress",
    technologies: ["HTML", "CSS", "JavaScript"],
    // Leave blank ("") until you have a real repository or deployed link:
    githubUrl: "",
    liveUrl: "",
  },
];
