# Task Manager

A modern, responsive task management application built with React and Vite. Organize your tasks across different status columns with an intuitive drag-and-drop interface.

## Features

- **Board Layout**: Organize tasks across Todo, In Progress, and Done columns
- **Task Management**: Create, edit, and delete tasks with ease
- **Priority Levels**: Assign High, Medium, or Low priority to tasks
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- **Local Storage**: Tasks persist between sessions using browser localStorage

## Tech Stack

- **React 19.2.0**: UI library
- **Vite 7.2.4**: Fast build tool and development server
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **ESLint**: Code linting and quality

## Project Structure

\`\`\`
task-manager/

├── src/
│ ├── components/
│ │ ├── DeleteModal.jsx
│ │ ├── Header.jsx
│ │ ├── TaskCard.jsx
│ │ ├── TaskModal.jsx
│ │ └── TaskPanel.jsx
│ ├── data/
│ │ └── task.json
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
\`\`\`

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm 

### Installation

1. Clone the repository or download the ZIP file:
   \`\`\`bash
   git clone <repository-url>
   cd task-manager
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

### Development

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

Create an optimized production build:

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. Deploy:
   \`\`\`bash
   vercel
   \`\`\`

### Deploy to Netlify

1. Build the project:
   \`\`\`bash
   npm run build
   \`\`\`

2. Deploy the `dist` folder to Netlify via their CLI or drag-and-drop interface.



## Usage

### Creating a Task

1. Click the "Add Task" button in the header
2. Fill in the task title, description, and select a priority level
3. Click "Add Task" to create the task

### Editing a Task

1. Click on any task card
2. Modify the task details in the modal
3. Click "Update Task" to save changes

### Deleting a Task

1. Click the trash icon on any task card
2. Confirm deletion in the modal

### Moving Tasks

Tasks are automatically organized by their status (todo, in-progress, done). Change the status in the edit modal to move tasks between columns.


### Changing Priority Levels

Modify the `TASK_PRIORITY` object in `src/utils/constants.js`.

### Styling

The project uses Tailwind CSS. Global styles are in `src/index.css`, and component-specific styles use Tailwind utility classes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
