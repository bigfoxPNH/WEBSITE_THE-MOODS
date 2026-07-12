# The Moods Coffee & Tea Garden - Menu & Ambiance Interface (Part 1)

This project is a website introducing the beverage menu and garden space for **The Moods Coffee & Tea Garden** cafe. The website is built using React.js, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## 📋 System Requirements
To run this project on your computer, you need to have installed:
- **Node.js** (Recommended latest LTS version - v18 or v20+)
- **npm** package manager (pre-installed with Node.js)

---

## 🚀 Getting Started

### Step 1: Open the project directory
Open Command Prompt, PowerShell, or Terminal in the project directory path:
```bash
e:\PROJECT-2026\WEBSITE_THE MOODS
```

### Step 2: Install dependencies
Download and install all required libraries using the command:
```bash
npm install
```

### Step 3: Start the local development server
Run the project in development mode to view changes live:
```bash
npm run dev
```
After running the command, the console screen will display the local access path (typically `http://localhost:5173`). Open your browser and navigate to this link to experience the website.

---

## 📦 Production Build

When you want to package the entire source code into a completed build for hosting servers (or deployment to GitHub Pages), execute the following commands:

1. **Build and optimize the source code:**
   ```bash
   npm run build
   ```
   *The build output will be located in the `/dist` directory.*

2. **Preview the production build locally:**
   ```bash
   npm run preview
   ```
   *This helps verify if the final distribution behaves as expected before deployment.*

---

## 📁 Project Directory Structure

- `/public`: Contains static menu data `data/menu.json` and the beverage images directory `images/`.
- `/src`:
  - `/components`: Small UI components like `Navbar`, `Footer`, `ProductCard`, `ProductModal`.
  - `/sections`: Large layout sections like the `Hero` banner (including the Garden/Ambiance section).
  - `App.tsx`: The main assembly point and application state coordinator.
  - `index.css`: Tailwind CSS v4 configurations and custom fonts.
  - `main.tsx`: React project initialization entry file.
